import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from './constants/path';
import Main from './pages/Main';
import Layout from './components/Layout';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={ROUTE_PATH.BASE}
          element={<Main />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
