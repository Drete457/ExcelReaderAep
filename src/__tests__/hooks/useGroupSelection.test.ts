import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useGroupSelection } from '@/hooks/useGroupSelection';
import type { ExcelRow } from '@/types';

describe('useGroupSelection', () => {
  const mockRows: ExcelRow[] = [
    ['Group A', 'Data 1'],
    ['Group B', 'Data 2'],
    ['Group C', 'Data 3'],
    [123, 'Numeric group'],
  ];

  it('should initialize with undefined selectedLine', () => {
    const { result } = renderHook(() => useGroupSelection(mockRows));

    expect(result.current.selectedLine).toBeUndefined();
  });

  it('should select a group by string value', () => {
    const { result } = renderHook(() => useGroupSelection(mockRows));

    act(() => {
      result.current.selectGroup('Group B');
    });

    expect(result.current.selectedLine).toEqual(['Group B', 'Data 2']);
  });

  it('should select a group by numeric value', () => {
    const { result } = renderHook(() => useGroupSelection(mockRows));

    act(() => {
      result.current.selectGroup(123);
    });

    expect(result.current.selectedLine).toEqual([123, 'Numeric group']);
  });

  it('should handle selecting non-existent group', () => {
    const { result } = renderHook(() => useGroupSelection(mockRows));

    act(() => {
      result.current.selectGroup('Non-existent');
    });

    expect(result.current.selectedLine).toBeUndefined();
  });

  it('should clear selection', () => {
    const { result } = renderHook(() => useGroupSelection(mockRows));

    act(() => {
      result.current.selectGroup('Group A');
    });

    expect(result.current.selectedLine).toEqual(['Group A', 'Data 1']);

    act(() => {
      result.current.clearSelection();
    });

    expect(result.current.selectedLine).toBeUndefined();
  });

  it('should update selection when rows change', () => {
    const { result, rerender } = renderHook(
      ({ rows }) => useGroupSelection(rows),
      {
        initialProps: { rows: mockRows },
      },
    );

    act(() => {
      result.current.selectGroup('Group A');
    });

    expect(result.current.selectedLine).toEqual(['Group A', 'Data 1']);

    // Change rows
    const newRows: ExcelRow[] = [
      ['Group A', 'Updated Data'],
      ['Group D', 'New Data'],
    ];

    rerender({ rows: newRows });

    // Selection should update to new row data
    act(() => {
      result.current.selectGroup('Group A');
    });

    expect(result.current.selectedLine).toEqual(['Group A', 'Updated Data']);
  });

  it('should handle empty rows array', () => {
    const { result } = renderHook(() => useGroupSelection([]));

    act(() => {
      result.current.selectGroup('Any Value');
    });

    expect(result.current.selectedLine).toBeUndefined();
  });

  it('should handle rows with null/undefined first element', () => {
    const rowsWithNulls: ExcelRow[] = [
      [null, 'Data'],
      [undefined, 'More Data'],
      ['Valid', 'Valid Data'],
    ];

    const { result } = renderHook(() => useGroupSelection(rowsWithNulls));

    act(() => {
      result.current.selectGroup('Valid');
    });

    expect(result.current.selectedLine).toEqual(['Valid', 'Valid Data']);
  });

  it('should maintain stable function references', () => {
    const { result, rerender } = renderHook(() => useGroupSelection(mockRows));

    const firstSelectGroup = result.current.selectGroup;
    const firstClearSelection = result.current.clearSelection;

    rerender();

    expect(result.current.selectGroup).toBe(firstSelectGroup);
    expect(result.current.clearSelection).toBe(firstClearSelection);
  });
});
