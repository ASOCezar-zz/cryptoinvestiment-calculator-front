import { AxiosResponse } from 'axios';
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ICoin } from '../Interfaces/ICoin';
import { IInvestiment } from '../Interfaces/IInvestiment';
import { api } from '../services/api';

export interface IInvestimentsContext extends IInvestiment {
  coin: ICoin;
}

type InvestimentsContextType = {
  investiments: IInvestimentsContext[];
  setChanged: Dispatch<SetStateAction<boolean>>;
};

type InvestimentProviderProps = {
  children: JSX.Element[] | JSX.Element;
};

const InvestimentsContext = createContext({} as InvestimentsContextType);

export default InvestimentsContext;

export const InvestimentProvider = ({ children }: InvestimentProviderProps) => {
  const [investiments, setInvestiments] = useState<IInvestimentsContext[] | null>(null);
  const [changed, setChanged] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    api.get('/investiments').then((response: AxiosResponse<IInvestimentsContext[]>) => {
      if (mounted) setInvestiments(response.data);
    });
    return () => {
      mounted = false;
    };
  }, [changed]);

  return <InvestimentsContext.Provider value={{ investiments, setChanged }}>{children}</InvestimentsContext.Provider>;
};
