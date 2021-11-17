import { Alert, Button, TextField } from '@material-ui/core';
import axios, { AxiosResponse } from 'axios';
import router from 'next/router';
import { FormEvent, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import FormSection from './FormSection';

export default function CreateAccountForm(): ReactElement {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    axios
      .post('http://localhost:3333/users/register', data)
      .then((res: AxiosResponse) => router.push('/login'))
      .catch(function (error) {
        const message = error.response.data.error;
        if (message === 'Password and Confirmation Does Not Match') {
          setEmailError(false);
          setPasswordError(true);
        }
        if (message === 'Email Already in Use') {
          setPasswordError(false);
          setEmailError(true);
        }
      });
  };

  const renderError = () => {
    if (passwordError) return <Alert severity="error">As senhas não se correspondem</Alert>;
    if (emailError) return <Alert severity="error">Esse email já está em uso</Alert>;
  };

  return (
    <FormSection title="Cria sua conta" description="Não possui uma conta? Cadastre-se agora">
      <Wrapper onSubmit={async (e) => handleSubmit(e)}>
        {renderError()}
        <TextField
          id="outlined-basic"
          required={true}
          label="Name"
          variant="outlined"
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          required={true}
          label="Email"
          variant="outlined"
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          required={true}
          type={'password'}
          label="Senha"
          variant="outlined"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          required={true}
          type={'password'}
          label="Confirme a Senha"
          variant="outlined"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" className="button" type="submit">
          Cadastrar
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
    gap: 20px;
    width: 100%;

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
