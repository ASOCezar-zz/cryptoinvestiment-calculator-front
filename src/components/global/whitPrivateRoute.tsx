import React from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { NextPage, NextPageContext } from 'next';

type HocComponentReturn = {
  userAuth: { access_token: string };
};

const login = '/login';

const checkUserAuthentication = (context: NextPageContext) => {
  const { 'crypto-calculator-token': access_token } = parseCookies(context);

  return { access_token };
};

const withPrivateRoute = (WrappedComponent: NextPage) => {
  const hocComponent = ({ ...props }): JSX.Element => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context: NextPageContext): Promise<HocComponentReturn> => {
    const userAuth = checkUserAuthentication(context);

    if (!userAuth?.access_token) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        access_token: userAuth.access_token,
      } as NextPageContext);
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default withPrivateRoute;
