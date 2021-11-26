import styled from 'styled-components';
import { useUpdateCoin } from '../../../hooks/useUpdateCoin';
import Header from '../../global/Header';
import { CardComponent, GridComponent, InvestimentListSectionComponent } from './components';
import icon1 from '../../../assets/card_icons/Union.svg';
import icon2 from '../../../assets/card_icons/Outiline.svg';
import icon3 from '../../../assets/card_icons/Default.svg';
import { useContext, useEffect, useState } from 'react';
import { InvestimentData } from './components/InvestimentsListSection/TableInvestiments';
import InvestimentsContext from '../../../contexts/investimentsContext';
import CoinContext from '../../../contexts/coinContext';
import serializeInvestiments from '../../../services/serializeInvestiments';
import Loading from '../../global/Loading';

export default function Home(): JSX.Element {
  const { investiments } = useContext(InvestimentsContext);
  const { coins } = useContext(CoinContext);

  useUpdateCoin();

  const [mappedInvestiments, setMappedInvestiments] = useState<InvestimentData[]>(null);
  const [amount, setAmount] = useState<number>(0);
  const [amountRoi, setAmountRoi] = useState<number>(0);
  const [amountInvested, setAmountInvested] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    if (coins) {
      if (investiments) {
        const mapInvestiments = investiments.map((investiment) => serializeInvestiments(investiment, coins));
        if (mounted) {
          setMappedInvestiments(mapInvestiments);
          setIsLoading(false);
        }
      }
    }

    return () => {
      mounted = false;
    };
  }, [coins, investiments]);

  useEffect(() => {
    let mounted = true;
    const getAmount: number[] = [];
    if (mappedInvestiments) {
      mappedInvestiments.map((mappedInvestiment) => {
        getAmount?.push(mappedInvestiment.profit);
      });
      if (mounted && getAmount.length > 0) {
        setAmount(getAmount?.reduce((prevValue, attValue) => prevValue + attValue));
      } else if (getAmount.length === 0) {
        setAmount(0);
      }
    }

    return () => {
      mounted = false;
    };
  }, [mappedInvestiments]);

  useEffect(() => {
    let mounted = true;
    const getAmount: number[] = [];
    if (mappedInvestiments) {
      mappedInvestiments.map((mappedInvestiment) => {
        getAmount?.push(mappedInvestiment.roi);
      });
      if (mounted && getAmount.length > 0) {
        setAmountRoi(getAmount?.reduce((prevValue, attValue) => prevValue + attValue));
      } else if (getAmount.length === 0) {
        setAmountRoi(0);
      }
    }

    return () => {
      mounted = false;
    };
  }, [mappedInvestiments]);

  useEffect(() => {
    let mounted = true;
    const getAmount: number[] = [];
    if (mappedInvestiments) {
      mappedInvestiments.map((mappedInvestiment) => {
        getAmount?.push(mappedInvestiment.investimentValue);
      });
      if (mounted && getAmount.length > 0) {
        setAmountInvested(getAmount?.reduce((prevValue, attValue) => prevValue + attValue));
      } else if (getAmount.length === 0) {
        setAmountInvested(0);
      }
    }

    return () => {
      mounted = false;
    };
  }, [mappedInvestiments]);

  const roiInfo = amountRoi / investiments?.length || 0;

  return (
    <>
      <Loading isActive={isLoading} />
      <Wrapper>
        <Header />
        <GridComponent>
          <CardComponent
            dark
            imgSource={icon1}
            title="MÉDIA DE ROI DOS INVESTIMENTOS"
            value={`${roiInfo.toFixed(2)}%`}
          />
          <CardComponent
            imgSource={icon2}
            title="VALOR TOTAL FATURADO"
            value={amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
          <CardComponent
            imgSource={icon3}
            title="VALOR TOTAL INVESTIDO"
            value={amountInvested.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
        </GridComponent>
        <InvestimentListSectionComponent mappedInvestiments={mappedInvestiments} />
      </Wrapper>
    </>
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
