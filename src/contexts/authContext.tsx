import { AxiosResponse } from 'axios';

import { parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

type AuthProviderProps = {
  children: JSX.Element[];
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: ResponseDataType['user'];
  signIn: (data: DataType) => Promise<void>;
};

type DataType = {
  email: string;
  password: string;
};

type ResponseDataType = {
  user: {
    id: number;
    name: string;
    email: string;
  };
  access_token: string;
};

const AuthContext = createContext({} as AuthContextType);

export default AuthContext;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<ResponseDataType['user'] | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'crypto-calculator-token': access_token } = parseCookies();

    if (access_token) {
      api
        .post('/token', { hash: access_token })
        .then((response: AxiosResponse<ResponseDataType['user']>) => setUser(response.data))
        .catch((error) => {
          console.error(error.response.data.error);
        });
    }
  }, []);

  async function signIn({ email, password }: DataType): Promise<void> {
    const { user, access_token } = await api
      .post('/users/login', { email, password })
      .then((response: AxiosResponse<ResponseDataType>) => response.data);

    setCookie(undefined, 'crypto-calculator-token', access_token, {
      maxAge: 60 * 60,
    });
    api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

    setUser(user);
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>{children}</AuthContext.Provider>;
};
