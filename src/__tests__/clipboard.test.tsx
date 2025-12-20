import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import CopyAllButton from '@/Components/copy-all-button/copy-all-button';

describe('CopyAllButton', () => {
  it('copies all remaining names to the clipboard and updates the button label', async () => {
    const names = ['Alice', 'Bruno'];

    render(<CopyAllButton names={names} />);

    const button = screen.getByRole('button', {
      name: /Copiar todos os nomes não selecionados/i,
    });

    await userEvent.click(button);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Alice, Bruno');
    expect(
      screen.getByRole('button', {
        name: /Copiado todos os nomes não selecionados/i,
      }),
    ).toBeInTheDocument();
  });

  it('resets the copied state when the list of names changes', async () => {
    const { rerender } = render(<CopyAllButton names={['Ana']} />);

    const button = screen.getByRole('button', {
      name: /Copiar todos os nomes não selecionados/i,
    });

    await userEvent.click(button);
    expect(
      screen.getByRole('button', {
        name: /Copiado todos os nomes não selecionados/i,
      }),
    ).toBeInTheDocument();

    rerender(<CopyAllButton names={['Sofia']} />);

    expect(
      screen.getByRole('button', {
        name: /Copiar todos os nomes não selecionados/i,
      }),
    ).toBeInTheDocument();
  });
});
