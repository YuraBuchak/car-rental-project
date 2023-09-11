import HomePage from 'pages/HomePage/HomePage';
import Layout from './Layout';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/Favorites/Favorites';
import { Route, Routes } from 'react-router-dom';

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
