import { useGetUserById } from '@/api/user.api';
import userStore from '@/store/user';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams();
  const { user: currentUser } = userStore();
  const { data: user } = useGetUserById(id!);

  const isMyPage = currentUser?.user_id === user?.user_id;

  return (
    <>
      <div>
        <p>{user!.user_nickname}</p>
      </div>
      {isMyPage && (
        <>
          <div>
            <p>{user!.mileage}</p>
          </div>
          <div>
            {user!.coupons.map((_, idx) => {
              return <div key={idx}>나의 쿠폰</div>;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default UserPage;
