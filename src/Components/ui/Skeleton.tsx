import './Skeleton.scss';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

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
