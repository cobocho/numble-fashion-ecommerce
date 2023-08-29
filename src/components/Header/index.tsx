import { ROUTE_PATH } from '../../constants/path';
import * as Style from './index.style';

const Header = () => {
  return (
    <Style.Container>
      <Style.HeaderList>
        <Style.HeaderItem to={ROUTE_PATH.BASE}>상품 목록</Style.HeaderItem>
        <Style.HeaderItem to={ROUTE_PATH.LOGIN}>로그인</Style.HeaderItem>
      </Style.HeaderList>
    </Style.Container>
  );
};

export default Header;
