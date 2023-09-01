import { ROUTE_PATH } from '@/constants/path';
import userStore from '@/store/user';
import * as Style from './index.style';
import { AuthenticatedHeaderItems, UnauthenticatedHeaderItems } from './AuthHeaderItems';

const Header = () => {
  const { user } = userStore();

  return (
    <Style.Container>
      <Style.HeaderList>
        <Style.HeaderItem to={ROUTE_PATH.BASE}>상품 목록</Style.HeaderItem>

        {user ? <AuthenticatedHeaderItems user={user} /> : <UnauthenticatedHeaderItems />}
      </Style.HeaderList>
    </Style.Container>
  );
};

export default Header;
