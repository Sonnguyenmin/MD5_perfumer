import { Spin } from 'antd';
import { Suspense } from 'react';

const LazyLoader = ({ children }) => {
  return (
    <Suspense
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(255,255,255,0.6)]"
      fallback={
        <Spin
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(255,255,255,0.6)]"
          size="large"
        />
      }
    >
      {children}
    </Suspense>
  );
};

export default LazyLoader;