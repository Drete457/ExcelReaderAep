import './Skeleton.scss';

/**
 * Props for the Skeleton component.
 */
interface SkeletonProps {
  /** Width of the skeleton (CSS value) */
  width?: string;
  /** Height of the skeleton (CSS value) */
  height?: string;
  /** Border radius (CSS value) */
  borderRadius?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Base skeleton loading placeholder with smooth animation.
 * Displays an animated gradient to indicate loading state.
 *
 * @example
 * ```tsx
 * <Skeleton width="200px" height="2rem" />
 * ```
 *
 * @param props - Skeleton styling properties
 * @returns An animated skeleton element with ARIA attributes
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  borderRadius = '8px',
  className = '',
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
      aria-busy="true"
      aria-live="polite"
    />
  );
};

/**
 * Skeleton loading placeholder for multiple lines of text.
 * Renders a specified number of skeleton lines with the last line at 80% width.
 *
 * @example
 * ```tsx
 * <SkeletonText lines={4} />
 * ```
 *
 * @param props - Configuration object
 * @param props.lines - Number of text lines to display (default: 3)
 * @returns Multiple skeleton lines representing text content
 */
export const SkeletonText: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="skeleton-text">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          height="1rem"
          width={index === lines - 1 ? '80%' : '100%'}
          className="skeleton-text__line"
        />
      ))}
    </div>
  );
};

/**
 * Skeleton loading placeholder for card components.
 * Displays a structured skeleton with title, text lines, and action buttons.
 *
 * @example
 * ```tsx
 * <Suspense fallback={<SkeletonCard />}>
 *   <Card>...</Card>
 * </Suspense>
 * ```
 *
 * @returns A card-shaped skeleton with title, content, and actions
 */
export const SkeletonCard: React.FC = () => {
  return (
    <div className="skeleton-card" aria-busy="true" aria-live="polite">
      <Skeleton height="2rem" width="60%" className="skeleton-card__title" />
      <SkeletonText lines={2} />
      <div className="skeleton-card__actions">
        <Skeleton height="2.5rem" width="120px" borderRadius="12px" />
        <Skeleton height="2.5rem" width="120px" borderRadius="12px" />
      </div>
    </div>
  );
};

/**
 * Skeleton loading placeholder for group components.
 * Displays a skeleton with header and content area for group-style layouts.
 *
 * @example
 * ```tsx
 * <Suspense fallback={<SkeletonGroup />}>
 *   <GroupComponent>...</GroupComponent>
 * </Suspense>
 * ```
 *
 * @returns A group-shaped skeleton with header and content sections
 */
export const SkeletonGroup: React.FC = () => {
  return (
    <div className="skeleton-group" aria-busy="true" aria-live="polite">
      <Skeleton
        height="2.5rem"
        width="70%"
        className="skeleton-group__header"
      />
      <div className="skeleton-group__content">
        <SkeletonText lines={4} />
      </div>
    </div>
  );
};
