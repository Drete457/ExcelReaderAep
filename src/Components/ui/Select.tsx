import ReactSelect, { SingleValue } from 'react-select';
import type { Props as ReactSelectProps } from 'react-select';
import type { SelectOption } from '@/types';

interface SelectProps
  extends Omit<ReactSelectProps<SelectOption, false>, 'onChange'> {
  onChange?: (value: SingleValue<SelectOption>) => void;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

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
