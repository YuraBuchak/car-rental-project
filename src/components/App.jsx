// import HomePage from 'pages/HomePage/HomePage';
// import Layout from './Layout';
// import CatalogPage from 'pages/CatalogPage/CatalogPage';
// import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('../components/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
