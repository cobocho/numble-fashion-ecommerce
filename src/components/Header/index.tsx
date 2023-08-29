import * as Style from './index.style';

const Header = () => {
  return (
    <Style.Container>
      <Style.HeaderList>
        <Style.HeaderItem>상품 목록</Style.HeaderItem>
        <Style.HeaderItem>로그인</Style.HeaderItem>
      </Style.HeaderList>
    </Style.Container>
  );
};

export default Header;
