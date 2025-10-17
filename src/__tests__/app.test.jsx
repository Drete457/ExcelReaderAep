import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../App';

const { mockReadExcelFile } = vi.hoisted(() => ({
  mockReadExcelFile: vi.fn(),
}));

vi.mock('read-excel-file', () => ({
  __esModule: true,
  default: mockReadExcelFile,
}));

vi.mock('../View/Result', () => ({
  __esModule: true,
  default: () => <div data-testid="result-panel">Resultado disponível</div>,
}));

describe('App key flows', () => {
  beforeEach(() => {
    mockReadExcelFile.mockReset();
  });

  it('processes a valid workbook and renders results after option selection', async () => {
    mockReadExcelFile.mockImplementationOnce(
      () =>
        new Promise(resolve => {
          setTimeout(
            () =>
              resolve([
                ['Dados iniciais'],
                ['Código', 'Região', 'Local', 'Estado', 'ECG'],
                ['Nome', 'Região', 'Local', 'Estado'],
                ['123', 'Lisboa', 'Lisboa', 'Ativo', 'Chefe de Grupo'],
              ]),
            0,
          );
        }),
    );

    render(<App />);

    const fileInput = screen.getByTestId('excel-file-input');
    const file = new File(['planilha'], 'mock.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    await userEvent.upload(fileInput, file);

    await waitFor(() =>
      expect(
        screen.getByText(/Ficheiro "mock\.xlsx" carregado com sucesso/i),
      ).toBeInTheDocument(),
    );

    const select = screen.getByRole('combobox');
    await userEvent.click(select);

    const option = await screen.findByText(
      'Grupo: 123 Região: Lisboa',
      undefined,
      { timeout: 2000 },
    );
    await userEvent.click(option);

    await screen.findByTestId('result-panel');
  });

  it('warns the user when the Excel parsing fails', async () => {
    mockReadExcelFile.mockRejectedValueOnce(
      new Error('Formato inválido. Por favor seleciona um ficheiro .xlsx.'),
    );

    render(<App />);

    const fileInput = screen.getByTestId('excel-file-input');
    const invalidFile = new File(['conteudo'], 'dados.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    await userEvent.upload(fileInput, invalidFile);

    await screen.findByText(
      /Formato inválido. Por favor seleciona um ficheiro/i,
    );

    expect(mockReadExcelFile).toHaveBeenCalledTimes(1);
  });
});
