import { Button } from '@mui/material';
import Link from 'next/link';
import { Wrapper } from './styles';

export default function Title(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <h1>Investimentos</h1>
        <h4>Gerencie seus Investimentos</h4>
      </div>
      <Link href="/dashboard/investiment/new">
        <Button variant="contained" color="primary" className="newInvestimentButton">
          + Cadastrar Novo Investimento
        </Button>
      </Link>
    </Wrapper>
  );
}
