import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import router from 'next/router';
import UserTemplate from '../../components/templates/User';
import { IUser } from '../../Interfaces/IUser';
import { getApiClient } from '../../services/axios';

type UserProps = {
  user: IUser;
};

function User({ user }: UserProps) {
  return <UserTemplate user={user} />;
}

User.getInitialProps = async (ctx: GetServerSidePropsContext) => {
  const api = getApiClient(ctx);

  const user = await api
    .get('/users')
    .then((response: AxiosResponse<IUser>) => response.data)
    .catch(() => {
      if (ctx.res) {
        ctx.res?.writeHead(302, {
          Location: '/dashboard',
        });
        ctx.res?.end();
      } else {
        router.replace('/dashboard');
      }
    });

  return {
    user,
  };
};

export default User;
