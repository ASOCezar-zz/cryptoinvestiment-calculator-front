import { Alert, Button, TextField } from '@material-ui/core';
import axios from 'axios';
import router from 'next/router';
import { FormEvent, ReactElement, useState } from 'react';
import FormSection from '../FormSection/FormSection';
import { Wrapper } from './styles';

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
      .then(() => router.push('/login'))
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
    <FormSection title="Crie sua conta" description="Não possui uma conta? Cadastre-se agora">
      <Wrapper onSubmit={handleSubmit}>
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
