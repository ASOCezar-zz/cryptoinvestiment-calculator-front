import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Banner from '../../components/templates/Login/Banner';
import LoginForm from '../../components/templates/Login/LoginForm';
import CreateAccountForm from '../../components/templates/Login/CreateAccountForm';
import PasswordForgot from '../../components/templates/Login/PasswordForgot';

export default function Param(): ReactElement {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const renderForm = () => {
    if (slug === '') return <LoginForm />;
    if (slug === 'cadastro') return <CreateAccountForm />;
    if (slug === 'reset-senha') return <PasswordForgot />;
    if (slug === 'reset-senha-token') return <PasswordForgot token />;
    if (slug === 'nova-senha') return <PasswordForgot resetPassword />;
  };

  return (
    <Wrapper>
      <Banner />
      {renderForm()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
