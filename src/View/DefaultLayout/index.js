import { Suspense } from 'react';
import SuspenseFallback from '../../Components/feedback/SuspenseFallback';

const DefaultLayout = ({ children }) => (
  <Suspense fallback={<SuspenseFallback message="A preparar o layout..." />}>
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <div className="c-body">{children}</div>
      </div>
    </div>
  </Suspense>
);

export default DefaultLayout;
