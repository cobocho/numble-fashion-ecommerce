import { ROUTE_PATH } from '@/constants/path';
import * as Style from './index.style';
import { User } from '@/types/user';

export const AuthenticatedHeaderItems = ({ user }: { user: User }) => {
  return (
    <>
      <Style.HeaderItem to={ROUTE_PATH.LOGOUT}>로그아웃</Style.HeaderItem>
      <Style.HeaderItem to={ROUTE_PATH.USER_PAGE.replace(':id', user.user_id)}>마이페이지</Style.HeaderItem>
    </>
  );
};

export const UnauthenticatedHeaderItems = () => {
  return (
    <>
      <Style.HeaderItem to={ROUTE_PATH.LOGIN}>로그인</Style.HeaderItem>
      <Style.HeaderItem to={ROUTE_PATH.SIGNUP}>회원가입</Style.HeaderItem>
    </>
  );
};
