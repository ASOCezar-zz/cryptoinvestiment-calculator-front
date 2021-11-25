import { useMediaQuery } from '@material-ui/core';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { BannerComponent, CreateAccountFormComponent, LoginFormComponent, PasswordForgotComponent } from './components';

export default function Wrapper() {
  const matches = useMediaQuery('(min-width: 768px');

  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const renderForm = () => {
    if (!slug) return <LoginFormComponent />;
    if (slug === 'cadastro') return <CreateAccountFormComponent />;
    if (slug === 'reset-senha') return <PasswordForgotComponent />;
    if (slug === 'reset-senha-token') return <PasswordForgotComponent token />;
    if (slug === 'nova-senha') return <PasswordForgotComponent resetPassword />;
  };
  const renderBanner = () => matches && <BannerComponent />;

  return (
    <Main>
      {renderBanner()}
      {renderForm()}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;
