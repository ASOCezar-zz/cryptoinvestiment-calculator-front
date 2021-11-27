import { InvestimentData } from '.';
import convertDate from '../../../../../../utils/convertDate';
import renderIcon from '../../../../../../utils/renderIcon';
import { CustomizedMenu } from '../../CustomizedMenu';
import { Card, Content, Header, Infos, Options } from './styles';

export default function CardInvestiment({ id, coinName, investimentValue, profit, date, roi }: InvestimentData) {
  const dateLocale = convertDate(date);

  let componentClass: string;

  const showCoinName = () => {
    if (coinName === 'bitcoin') return 'Bitcoin';
    if (coinName === 'ethereum') return 'Ethereum';
    if (coinName === 'litecoin') return 'Litecoin';
    if (coinName === 'ripple') return 'Ripple';
    if (coinName === 'binance_coin') return 'Binance';
  };

  if (profit < 0) componentClass = 'negative';
  return (
    <Card>
      <Content>
        <Header>
          <div className="icon">{renderIcon(coinName)}</div>
          <h1>{showCoinName()}</h1>
        </Header>
        <Infos componentClass={componentClass}>
          <div className="info">
            <h4>Investimento</h4>
            <h3>{investimentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
          </div>
          <div className="info" id="profit">
            <h4>Faturamento</h4>
            <h3>{profit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
          </div>
          <div className="info">
            <h4>Data</h4>
            <h3>{dateLocale}</h3>
          </div>
          <div className="info">
            <h4>ROI</h4>
            <h3>{`${roi.toFixed(2)}%`}</h3>
          </div>
        </Infos>
        <Options>
          <CustomizedMenu id={id} />
        </Options>
      </Content>
    </Card>
  );
}
