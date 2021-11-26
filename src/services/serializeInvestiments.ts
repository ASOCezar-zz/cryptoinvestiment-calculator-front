import { IInvestimentsContext } from '../contexts/investimentsContext';
import { ICoin } from '../Interfaces/ICoin';

import calcPercentage from '../utils/calcPercentage';

export default function serializeInvestiments(investiment: IInvestimentsContext, coins: ICoin[]) {
  const coin = coins.find((coin) => coin.name === investiment.coin.name);
  const returnValue = coin.price - investiment.coinValue;
  const returnPercentage = returnValue / 100;
  const returnTotal = calcPercentage(investiment.value, returnPercentage);

  return {
    id: investiment.id,
    coinName: investiment.coin.name,
    investimentValue: investiment.value,
    date: investiment.created_at,
    profit: returnTotal,
    roi: returnPercentage,
  };
}
