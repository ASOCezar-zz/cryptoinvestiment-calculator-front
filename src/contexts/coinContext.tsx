import { AxiosResponse } from 'axios';
import { createContext, useEffect, useState } from 'react';
import { ICoin } from '../Interfaces/ICoin';
import { api } from '../services/api';

type CoinContextType = {
  coins: ICoin[];
};

type CoinProviderProps = {
  children: JSX.Element[];
};

const CoinContext = createContext({} as CoinContextType);

export default CoinContext;

export const CoinProvider = ({ children }: CoinProviderProps) => {
  const [coins, setCoins] = useState<ICoin[] | null>(null);

  useEffect(() => {
    let mounted = true;
    api
      .get('/coin')
      .then((response: AxiosResponse<ICoin[]>) => {
        if (mounted) setCoins(response.data);
      })
      .catch((error) => console.log(error));
    return () => {
      mounted = false;
    };
  }, []);

  return <CoinContext.Provider value={{ coins }}>{children}</CoinContext.Provider>;
};
