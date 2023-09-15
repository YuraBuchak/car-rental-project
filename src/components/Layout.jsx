import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
