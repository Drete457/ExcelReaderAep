import '@testing-library/jest-dom/vitest';
import { beforeEach, vi } from 'vitest';

if (!navigator.clipboard) {
  Object.defineProperty(navigator, 'clipboard', {
    value: {
      writeText: vi.fn(),
    },
    writable: true,
  });
}

beforeEach(() => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText = vi.fn();
  }
});
