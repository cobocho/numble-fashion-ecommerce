import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from './constants/path';
import Main from './pages/Main';
import Layout from './components/Layout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import MyPage from './pages/MyPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={ROUTE_PATH.BASE}
          element={<Main />}
        />
        <Route
          path={ROUTE_PATH.LOGIN}
          element={<Login />}
        />
        <Route
          path={ROUTE_PATH.LOGOUT}
          element={<Logout />}
        />
        <Route
          path={ROUTE_PATH.USER_PAGE}
          element={<MyPage />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
