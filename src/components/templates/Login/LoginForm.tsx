import { Alert, Button, TextField } from '@material-ui/core';
import { FormEvent, ReactElement, useContext, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import FormSection from './FormSection';
import router from 'next/router';
import AuthContext from '../../../contexts/authContext';

export default function LoginForm(): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email, password };
    try {
      await signIn(data);
      router.push('/');
    } catch (error) {
      setError(true);
    }
  };

  const renderError = () => error && <Alert severity="error">Email ou Senha Incorretos!</Alert>;

  return (
    <FormSection title="Entrar" description="Preencha seus dados para entrar" login>
      <Wrapper onSubmit={(e) => handleSubmit(e)}>
        {renderError()}
        <TextField
          id="outlined-basic"
          required={true}
          label="Email"
          variant="outlined"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <TextField
          id="outlined-basic"
          required={true}
          type={'password'}
          label="Senha"
          value={password}
          onChange={async (e) => setPassword(e.target.value)}
          variant="outlined"
          className="input"
        />
        <Link href="/login/reset-senha">Esqueceu Sua Senha?</Link>
        <Button variant="contained" color="primary" className="button" type="submit">
          Entrar
        </Button>
      </Wrapper>
    </FormSection>
  );
}

const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 353px;
    gap: 16px;
    width: 100%;

    a {
      text-align: right;
      text-decoration: none;
      font-weight: 900;
      color: ${theme.colors.primaryColor};
    }

    > .button {
      color: ${theme.colors.white};
      height: 40px;
    }

    > .input {
      width: 100%;
      height: 45px;
    }
  `}
`;
