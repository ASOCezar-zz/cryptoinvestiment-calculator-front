import { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../../contexts/authContext';
import { useUpdateCoin } from '../../../hooks/useUpdateCoin';
import Header from './Header';
import Grid from './Grid';
import Card from './Card';
import icon1 from '../../../assets/card_icons/Union.svg';
import icon2 from '../../../assets/card_icons/Outiline.svg';
import icon3 from '../../../assets/card_icons/Default.svg';

export default function Home(): JSX.Element {
  const { user } = useContext(AuthContext);
  useUpdateCoin();

  return (
    <Wrapper>
      <Header />
      <Grid>
        <Card dark imgSource={icon1} title="MÉDIA DE ROI DOS INVESTIMENTOS" value="40%" />
        <Card imgSource={icon2} title="VALOR TOTAL FATURADO" value="40%" />
        <Card imgSource={icon3} title="VALOR TOTAL INVESTIDO" value="40%" />
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-inline: 8vw;
`;
