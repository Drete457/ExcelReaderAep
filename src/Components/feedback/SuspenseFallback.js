import { CSpinner } from '@coreui/react';

const SuspenseFallback = ({ message = 'A carregar conteúdo...' }) => (
  <div
    className="d-flex align-items-center justify-content-center py-3"
    style={{ columnGap: '0.75rem' }}
  >
    <CSpinner size="sm" role="status" />
    <span className="fw-semibold text-muted">{message}</span>
  </div>
);

export default SuspenseFallback;
