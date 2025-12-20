import ReactSelect, { SingleValue } from 'react-select';
import type { Props as ReactSelectProps } from 'react-select';
import type { SelectOption } from '@/types';

/**
 * Props for the Select component.
 * Extends react-select props with simplified onChange handler and accessibility.
 */
interface SelectProps extends Omit<
  ReactSelectProps<SelectOption, false>,
  'onChange'
> {
  /** Callback when selection changes, receives the selected option */
  onChange?: (value: SingleValue<SelectOption>) => void;
  /** Accessible label for screen readers */
  'aria-label'?: string;
  /** ID of element that describes this select */
  'aria-describedby'?: string;
}

/**
 * Standardized select dropdown component with accessibility and fixed positioning.
 * Wraps react-select with default configuration for menu portal and positioning.
 *
 * @example
 * ```tsx
 * <Select
 *   options={options}
 *   onChange={handleChange}
 *   aria-label="Select a group"
 *   placeholder="Choose..."
 * />
 * ```
 *
 * @param props - Select properties including react-select props
 * @returns A select dropdown with fixed positioning and accessibility
 */
export const Select: React.FC<SelectProps> = ({
  className = '',
  classNamePrefix = 'app-select',
  menuPortalTarget = typeof document !== 'undefined'
    ? document.body
    : undefined,
  menuPosition = 'fixed',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  return (
    <ReactSelect<SelectOption>
      className={`react-select-container ${className}`}
      classNamePrefix={classNamePrefix}
      menuPortalTarget={menuPortalTarget}
      menuPosition={menuPosition}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  );
};
