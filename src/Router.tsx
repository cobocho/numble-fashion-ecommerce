import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from './constants/path';
import Main from './pages/Main';

const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_PATH.BASE}
        element={<Main />}
      />
    </Routes>
  );
};

export default Router;
