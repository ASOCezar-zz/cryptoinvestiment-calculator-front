import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ICoin } from '../Interfaces/ICoin';
import { api } from '../services/api';

export const useUpdateCoin = async (): Promise<void> => {
  const [updateTime, setUpdateTime] = useState<string>('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { updated_at } = await api.get('/coin').then((res: AxiosResponse<ICoin[]>) => res.data[0]);
      if (mounted) {
        setUpdateTime(updated_at);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const time = Date.parse(updateTime);
    const now = Date.parse(new Date().toISOString());
    if (now - time >= 1800000) {
      api.post('/coin');
    }
  }, [updateTime]);
};
