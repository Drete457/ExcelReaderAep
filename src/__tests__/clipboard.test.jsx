import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import BotaoDeCopiarTodos from '../Components/botao-de-copiar-todos/botao-de-copiar-todos';

describe('BotaoDeCopiarTodos', () => {
  it('copies all remaining names to the clipboard and updates the button label', async () => {
    const names = ['Alice', 'Bruno'];

    render(<BotaoDeCopiarTodos texto={names} />);

    const button = screen.getByRole('button', {
      name: /Copiar todos os nomes não selecionados/i,
    });

    await userEvent.click(button);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'Alice, Bruno, ',
    );
    expect(
      screen.getByRole('button', {
        name: /Copiado todos os nomes não selecionados/i,
      }),
    ).toBeInTheDocument();
  });

  it('resets the copied state when the list of names changes', async () => {
    const { rerender } = render(<BotaoDeCopiarTodos texto={['Ana']} />);

    const button = screen.getByRole('button', {
      name: /Copiar todos os nomes não selecionados/i,
    });

    await userEvent.click(button);
    expect(
      screen.getByRole('button', {
        name: /Copiado todos os nomes não selecionados/i,
      }),
    ).toBeInTheDocument();

    rerender(<BotaoDeCopiarTodos texto={['Sofia']} />);

    expect(
      screen.getByRole('button', {
        name: /Copiar todos os nomes não selecionados/i,
      }),
    ).toBeInTheDocument();
  });
});
