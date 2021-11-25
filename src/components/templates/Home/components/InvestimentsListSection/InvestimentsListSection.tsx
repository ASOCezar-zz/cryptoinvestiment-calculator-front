import styled from 'styled-components';
import TableInvestiments, { InvestimentData } from './TableInvestiments';
import Title from './Title';

type InvestimentsListSection = {
  mappedInvestiments: InvestimentData[];
};

export default function InvestimentsListSection({ mappedInvestiments }: InvestimentsListSection) {
  return (
    <Wrapper>
      <Title />
      <TableInvestiments investiments={mappedInvestiments} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 200px;
`;
