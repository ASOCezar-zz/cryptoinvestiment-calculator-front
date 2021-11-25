import { Alert, Button, TextField } from '@material-ui/core';
import { FormEvent, ReactElement, useContext, useState } from 'react';
import Link from 'next/link';
import FormSection from '../FormSection/FormSection';
import router from 'next/router';
import AuthContext from '../../../../../contexts/authContext';
import Loading from '../../../../global/Loading';
import { Wrapper } from './styles';

export default function LoginForm(): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { email, password };
    try {
      await signIn(data)
        .then(() => setIsLoading(false))
        .then(() => router.push('/dashboard'));
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  const renderError = () => error && <Alert severity="error">Email ou Senha Incorretos!</Alert>;

  return (
    <>
      <Loading isActive={isLoading} />
      <FormSection title="Entrar" description="Preencha seus dados para entrar" login>
        <Wrapper onSubmit={handleSubmit}>
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
    </>
  );
}
