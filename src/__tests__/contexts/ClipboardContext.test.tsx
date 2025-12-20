import { render, renderHook } from '@testing-library/react';
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

      const { result } = renderHook(() => useClipboard(), { wrapper });

    act(() => {
      result.current.setTotalNames(100);
    });
      );

      const { result } = renderHook(() => useClipboard(), { wrapper });

    act(() => {
      result.current.setNamesList(['First']);
    });
    act(() => {
      result.current.setNamesList(prev => [...prev, 'Second', 'Third']);
    });
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
      );

      const { result, rerender } = renderHook(() => useClipboard(), {
        wrapper,
      });

      const firstReset = result.current.resetClipboard;

      // Trigger re-render
      result.current.setNamesList(['Test']);
      rerender();

      expect(result.current.resetClipboard).toBe(firstReset);
    });

    it('should share state between multiple consumers', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ClipboardProvider>{children}</ClipboardProvider>
      );

      const { result: consumer1 } = renderHook(() => useClipboard(), {
        wrapper,
      });
      const { result: consumer2 } = renderHook(() => useClipboard(), {
        wrapper,
      });

    act(() => {
      consumer1.current.setNamesList(['Shared Name']);
      consumer1.current.setTotalNames(25);
    });
    act(() => {
      result.current.setNamesList(['Item']);
    });
    expect(result.current.namesList).toEqual(['Item']);

    act(() => {
      result.current.setNamesList([]);
    });

      const { result } = renderHook(() => useClipboard(), { wrapper });

      result.current.setTotalNames(10);
      expect(result.current.totalNames).toBe(10);

      result.current.setTotalNames(0);
      expect(result.current.totalNames).toBe(0);
    });
  });
});
