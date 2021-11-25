import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IInvestimentsContext } from '../../../contexts/investimentsContext';
import { api } from '../../../services/api';
import Header from '../../global/Header';
import Loading from '../../global/Loading';
import { TitleComponent, InvestimentFormComponent } from './components';

type InvestimentTemplateProps = {
  investiment: void | IInvestimentsContext;
};

export default function Investiment({ investiment }: InvestimentTemplateProps): JSX.Element {
  const router = useRouter();

  const [value, setValue] = useState<string>('');
  const [coinName, setCoinName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    if (investiment) {
      if (mounted && investiment) {
        setValue(investiment.value.toString());
        setCoinName(investiment.coin.id.toString());
      }
    }

    return () => {
      mounted = false;
    };
  }, [investiment]);

  const handleCancel = (): void => {
    setValue('');
    setCoinName('');
    router.push('/dashboard');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      coin_id: coinName,
      value: +value,
    };

    if (!investiment) {
      await api
        .post('/investiments/create', data)
        .then(() => setIsLoading(false))
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    } else {
      await api
        .patch(`/investiments/update/${investiment.id}`, { value: data.value })
        .then(() => setIsLoading(false))
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }

    router.push('/dashboard');
  };

  return (
    <>
      <Loading isActive={isLoading} />
      <Wrapper>
        <Header />
        <TitleComponent />
        <InvestimentFormComponent
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          value={value}
          setValue={setValue}
          coinName={coinName}
          setCoinName={setCoinName}
          hasInvestiment={!!investiment}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 100px;

  @media (min-width: 768px) {
    padding-inline: 100px;
  }
`;
