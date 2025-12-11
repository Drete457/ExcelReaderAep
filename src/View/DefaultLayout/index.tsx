import { Suspense } from 'react';
import SuspenseFallback from '@/Components/feedback/SuspenseFallback';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
  <Suspense fallback={<SuspenseFallback message="A preparar o layout..." />}>
    <div className="c-app">{children}</div>
  </Suspense>
);

export default DefaultLayout;
