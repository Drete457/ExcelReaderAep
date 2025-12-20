import { render, renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ClipboardProvider } from '@/contexts/ClipboardContext';
import { useClipboard } from '@/contexts/useClipboard';
import { ReactNode } from 'react';

describe('ClipboardContext', () => {
  describe('ClipboardProvider', () => {
    it('should render children', () => {
      const { getByText } = render(
        <ClipboardProvider>
          <div>Test Child</div>
        </ClipboardProvider>,
      );

      expect(getByText('Test Child')).toBeTruthy();
    });

    it('should provide initial context values', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

      expect(result.current.namesList).toEqual([]);
      expect(result.current.totalNames).toBe(0);
      expect(typeof result.current.setNamesList).toBe('function');
      expect(typeof result.current.setTotalNames).toBe('function');
      expect(typeof result.current.resetClipboard).toBe('function');
    });

    it('should update namesList through context', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

      const testNames = ['Alice', 'Bob', 'Charlie'];
      act(() => {
        result.current.setNamesList(testNames);
      });

      expect(result.current.namesList).toEqual(testNames);
    });

    it('should update totalNames through context', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

      act(() => {
        result.current.setTotalNames(100);
      });

      expect(result.current.totalNames).toBe(100);
    });

    it('should support functional updates for namesList', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

      act(() => {
        result.current.setNamesList(['First']);
      });
      act(() => {
        result.current.setNamesList(prev => [...prev, 'Second', 'Third']);
      });

      expect(result.current.namesList).toEqual(['First', 'Second', 'Third']);
    });

    it('should reset all values when resetClipboard is called', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

      // Set some values
      act(() => {
        result.current.setNamesList(['Name 1', 'Name 2', 'Name 3']);
        result.current.setTotalNames(50);
      });

      expect(result.current.namesList).toHaveLength(3);
      expect(result.current.totalNames).toBe(50);

      // Reset
      act(() => {
        result.current.resetClipboard();
      });

      expect(result.current.namesList).toEqual([]);
      expect(result.current.totalNames).toBe(0);
    });

    it('should maintain stable resetClipboard reference', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result, rerender } = renderHook(() => useClipboard(), {
        wrapper,
      });

      const firstReset = result.current.resetClipboard;

      // Trigger re-render
      act(() => {
        result.current.setNamesList(['Test']);
      });
      rerender();

      expect(result.current.resetClipboard).toBe(firstReset);
    });

    it('should share state between multiple consumers', () => {
      const TestComponent = () => {
        const context1 = useClipboard();
        const context2 = useClipboard();

        return (
          <div>
            <span data-testid="names1">{context1.namesList.join(',')}</span>
            <span data-testid="names2">{context2.namesList.join(',')}</span>
            <span data-testid="total1">{context1.totalNames}</span>
            <span data-testid="total2">{context2.totalNames}</span>
            <button
              onClick={() => {
                context1.setNamesList(['Shared Name']);
                context1.setTotalNames(25);
              }}
            >
              Update
            </button>
          </div>
        );
      };

      const { getByText, getByTestId } = render(
        <ClipboardProvider>
          <TestComponent />
        </ClipboardProvider>,
      );

      const button = getByText('Update');
      act(() => {
        button.click();
      });

      expect(getByTestId('names1').textContent).toBe('Shared Name');
      expect(getByTestId('names2').textContent).toBe('Shared Name');
      expect(getByTestId('total1').textContent).toBe('25');
      expect(getByTestId('total2').textContent).toBe('25');
    });

    it('should handle empty namesList updates', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

      act(() => {
        result.current.setNamesList(['Item']);
      });
      expect(result.current.namesList).toEqual(['Item']);

      act(() => {
        result.current.setNamesList([]);
      });
      expect(result.current.namesList).toEqual([]);
    });

    it('should handle zero totalNames', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

      act(() => {
        result.current.setTotalNames(10);
      });
      expect(result.current.totalNames).toBe(10);

      act(() => {
        result.current.setTotalNames(0);
      });
      expect(result.current.totalNames).toBe(0);
    });
  });
});
