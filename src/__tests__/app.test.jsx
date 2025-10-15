import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from '../App';

const mockReadExcelFile = vi.fn();

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

  it('processes a valid workbook, surfaces status messages, and renders results after option selection', async () => {
    mockReadExcelFile.mockResolvedValueOnce([
      ['Dados iniciais'],
      ['Código', 'Região', 'Local', 'Estado', 'ECG'],
      ['Nome', 'Região', 'Local', 'Estado'],
      ['123', 'Lisboa', 'Lisboa', 'Ativo', 'Chefe de Grupo'],
    ]);

    render(<App />);

    const fileInput = screen.getByTestId('excel-file-input');
    const file = new File(['planilha'], 'mock.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    await userEvent.upload(fileInput, file);

    await screen.findByText(/carregar o ficheiro "mock\.xlsx"/i);

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

  it('warns the user when an unsupported file is uploaded', async () => {
    render(<App />);

    const fileInput = screen.getByTestId('excel-file-input');
    const invalidFile = new File(['conteudo'], 'dados.txt', {
      type: 'text/plain',
    });

    await userEvent.upload(fileInput, invalidFile);

    await waitFor(() =>
      expect(
        screen.getByText(/Formato inválido. Por favor seleciona um ficheiro/i),
      ).toBeInTheDocument(),
    );

    expect(mockReadExcelFile).not.toHaveBeenCalled();
  });
});
