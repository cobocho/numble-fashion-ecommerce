import { ROUTE_PATH } from '@/constants/path';
import userStore from '@/store/user';
import * as Style from './index.style';

const Header = () => {
  const { user } = userStore();

  return (
    <Style.Container>
      <Style.HeaderList>
        <Style.HeaderItem to={ROUTE_PATH.BASE}>상품 목록</Style.HeaderItem>

        {user ? (
          <>
            <Style.HeaderItem to={ROUTE_PATH.LOGOUT}>로그아웃</Style.HeaderItem>
            <Style.HeaderItem to={ROUTE_PATH.USER_PAGE.replace(':id', user.user_id)}>마이페이지</Style.HeaderItem>
          </>
        ) : (
          <Style.HeaderItem to={ROUTE_PATH.LOGIN}>로그인</Style.HeaderItem>
        )}
      </Style.HeaderList>
    </Style.Container>
  );
};

export default Header;
