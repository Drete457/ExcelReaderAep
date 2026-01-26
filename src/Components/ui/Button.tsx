import { CButton } from '@coreui/react';
import type { ComponentProps, FC } from 'react';

/**
 * Props for the Button component.
 * Extends CoreUI CButton props with automatic accessibility handling.
 */
interface ButtonProps extends Omit<ComponentProps<typeof CButton>, 'children'> {
  /** Button content (text, icons, or other React elements) */
  children: React.ReactNode;
  /** Optional accessible label. Auto-generated from text children if not provided */
  'aria-label'?: string;
}

/**
 * Standardized button component with built-in accessibility.
 * Wraps CoreUI's CButton with automatic aria-label generation from text content.
 *
 * @example
 * ```tsx
 * <Button color="primary" onClick={handleClick}>
 *   Click Me
 * </Button>
 * ```
 *
 * @param props - Button properties including CoreUI CButton props
 * @returns A button element with accessibility enhancements
 */
const Button: FC<ButtonProps> = ({
  children,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => (
  <CButton
    className={className}
    aria-label={
      ariaLabel || (typeof children === 'string' ? children : undefined)
    }
    {...props}
  >
    {children}
  </CButton>
);

export default Button;
