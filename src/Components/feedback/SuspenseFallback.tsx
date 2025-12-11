interface SuspenseFallbackProps {
  message?: string;
}

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({
  message = 'A carregar conteúdo...',
}) => (
  <div
    className="d-flex align-items-center justify-content-center py-3"
    style={{ columnGap: '0.75rem' }}
  >
    <span className="suspense-spinner" role="status" aria-hidden="true" />
    <span className="fw-semibold text-muted">{message}</span>
  </div>
);

export default SuspenseFallback;
