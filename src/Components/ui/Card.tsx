import { CCard, CCardBody } from '@coreui/react';
import type { ComponentProps } from 'react';

/**
 * Props for the Card component.
 * Extends CoreUI CCard props.
 */
interface CardProps extends ComponentProps<typeof CCard> {
  /** Card content */
  children: React.ReactNode;
}

/**
 * Standardized card container component.
 * Wraps CoreUI's CCard with automatic 'app-card' className.
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardBody>Content here</CardBody>
 * </Card>
 * ```
 * 
 * @param props - Card properties including CoreUI CCard props
 * @returns A card container element with standard styling
 */
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

/**
 * Props for the CardBody component.
 * Extends CoreUI CCardBody props.
 */
interface CardBodyProps extends ComponentProps<typeof CCardBody> {
  /** Card body content */
  children: React.ReactNode;
}

/**
 * Standardized card body component.
 * Wraps CoreUI's CCardBody for consistent card content styling.
 * 
 * @example
 * ```tsx
 * <CardBody>
 *   <h3>Title</h3>
 *   <p>Description</p>
 * </CardBody>
 * ```
 * 
 * @param props - CardBody properties including CoreUI CCardBody props
 * @returns A card body element
 */
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
