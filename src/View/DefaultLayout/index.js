import { Suspense } from 'react';

const DefaultLayout = ({ children }) => (
  <Suspense>
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <div className="c-body">{children}</div>
      </div>
    </div>
  </Suspense>
);

export default DefaultLayout;
