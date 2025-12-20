import { CButton } from '@coreui/react';
import type { ComponentProps } from 'react';

interface ButtonProps extends Omit<ComponentProps<typeof CButton>, 'children'> {
  children: React.ReactNode;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  return (
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
};
