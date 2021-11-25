import { useMediaQuery } from '@mui/material';
import CardInvestiment from './CardInvestiment';
import Cell from './Cell';
import { CardsWrapper, Container } from './styles';

export type InvestimentData = {
  id: number;
  coinName: string;
  investimentValue: number;
  profit: number;
  date: string;
  roi: number;
};

type TableInvestimentsProps = {
  investiments: InvestimentData[] | null;
};

export default function TableInvestiments({ investiments }: TableInvestimentsProps) {
  const matches = useMediaQuery('(min-width: 768px)');

  const renderCell = (investiment: InvestimentData) => <Cell key={investiment.id} {...investiment} />;
  const renderCard = (investiment: InvestimentData) => <CardInvestiment key={investiment.id} {...investiment} />;

  const renderMobile = (): JSX.Element => {
    return <CardsWrapper>{investiments?.map(renderCard)}</CardsWrapper>;
  };

  const renderDesktop = (): JSX.Element => {
    return (
      <Container>
        <thead>
          <tr>
            <th>Moeda</th>
            <th>Investimento</th>
            <th>Faturamento</th>
            <th>Data</th>
            <th>ROI</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{investiments?.map(renderCell)}</tbody>
      </Container>
    );
  };

  return <>{matches ? renderDesktop() : renderMobile()}</>;
}
