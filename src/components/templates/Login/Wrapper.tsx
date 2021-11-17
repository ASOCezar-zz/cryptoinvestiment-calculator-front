import { useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import Banner from './Banner';

type WrapperPropsType = {
  children: JSX.Element;
};

export default function Wrapper({ children }: WrapperPropsType) {
  const matches = useMediaQuery('(min-width: 768px');

  const renderBanner = () => matches && <Banner />;

  return (
    <Main>
      {renderBanner()}
      {children}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
