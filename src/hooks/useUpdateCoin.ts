import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

type Coin = {
  id: number;
  name: string;
  price: number;
  updated_at: string;
};

export const useUpdateCoin = async (): Promise<void> => {
  const [updateTime, setUpdateTime] = useState<string>('');

  console.log('called');

  useEffect(() => {
    (async () => {
      const { updated_at } = await api.get('/coin').then((res: AxiosResponse<Coin[]>) => res.data[0]);
      setUpdateTime(updated_at);
    })();
  }, []);

  useEffect(() => {
    const time = +updateTime.split('T')[1]?.split(':')[0];
    const now = +new Date().toISOString().split('T')[1].split(':')[0];
    if (now - time >= 1) {
      api.post('/coin');
    }
  }, [updateTime]);
};
