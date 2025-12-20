import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useClipboard } from '@/contexts/useClipboard';
import { ClipboardProvider } from '@/contexts/ClipboardContext';
import { ReactNode } from 'react';

describe('useClipboard', () => {
  it('should throw error when used outside ClipboardProvider', () => {
    expect(() => {
      renderHook(() => useClipboard());
    }).toThrow('useClipboard must be used within a ClipboardProvider');
  });

  it('should return clipboard context when used within provider', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ClipboardProvider>{children}</ClipboardProvider>
    );

    const { result } = renderHook(() => useClipboard(), { wrapper });

    expect(result.current).toHaveProperty('namesList');
    expect(result.current).toHaveProperty('totalNames');
    expect(result.current).toHaveProperty('setNamesList');
    expect(result.current).toHaveProperty('setTotalNames');
    expect(result.current).toHaveProperty('resetClipboard');
  });

  it('should have initial values', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ClipboardProvider>{children}</ClipboardProvider>
    );

    const { result } = renderHook(() => useClipboard(), { wrapper });

    expect(result.current.namesList).toEqual([]);
    expect(result.current.totalNames).toBe(0);
  });

  it('should update namesList', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ClipboardProvider>{children}</ClipboardProvider>
    );

    const { result } = renderHook(() => useClipboard(), { wrapper });

    const newNames = ['Name 1', 'Name 2'];
    act(() => {
      result.current.setNamesList(newNames);
    });

    expect(result.current.namesList).toEqual(newNames);
  });

  it('should update totalNames', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ClipboardProvider>{children}</ClipboardProvider>
    );

    const { result } = renderHook(() => useClipboard(), { wrapper });

    act(() => {
      result.current.setTotalNames(42);
    });

    expect(result.current.totalNames).toBe(42);
  });

  it('should reset clipboard state', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ClipboardProvider>{children}</ClipboardProvider>
    );

    const { result } = renderHook(() => useClipboard(), { wrapper });

    // Set some values
    act(() => {
      result.current.setNamesList(['Name 1', 'Name 2']);
      result.current.setTotalNames(5);
    });

    // Reset
    act(() => {
      result.current.resetClipboard();
    });

    expect(result.current.namesList).toEqual([]);
    expect(result.current.totalNames).toBe(0);
  });

  it('should support functional updates for namesList', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ClipboardProvider>{children}</ClipboardProvider>
    );

    const { result } = renderHook(() => useClipboard(), { wrapper });

    act(() => {
      result.current.setNamesList(['Name 1']);
    });
    act(() => {
      result.current.setNamesList(prev => [...prev, 'Name 2']);
    });

    expect(result.current.namesList).toEqual(['Name 1', 'Name 2']);
  });
});
