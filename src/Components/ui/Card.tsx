import { CCard, CCardBody } from '@coreui/react';
import type { ComponentProps } from 'react';

interface CardProps extends ComponentProps<typeof CCard> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <CCard className={`app-card ${className}`} {...props}>
      {children}
    </CCard>
  );
};

interface CardBodyProps extends ComponentProps<typeof CCardBody> {
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <CCardBody className={className} {...props}>
      {children}
    </CCardBody>
  );
};
