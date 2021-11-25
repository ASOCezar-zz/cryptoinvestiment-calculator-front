import { Button, TextField } from '@material-ui/core';
import { FormEvent, ReactElement, useEffect, useState } from 'react';
import router from 'next/router';
import nookies, { setCookie } from 'nookies';
import FormSection from '../FormSection/FormSection';
import { Wrapper } from './styles';
import { api } from '../../../../../services/api';
import { Alert } from '@mui/material';
import Loading from '../../../../global/Loading';

export default function PasswordResetForm(): ReactElement {
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const { t: access_token } = router.query;
    setCookie(undefined, 'crypto-calculator-token', access_token as string, {
      maxAge: 60,
    });
    api.defaults.headers['Authorization'] = `Bearer ${access_token}`;
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setError(true);
      setLoading(false);
    }

    await api
      .post('/users/change-password', { password, confirmPassword })
      .then(() => {
        nookies.destroy(undefined, 'crypto-calculator-token');
      })
      .then(() => {
        setLoading(false);
        router.push('/login');
      })
      .catch((error) => console.error(error.message));
  };

  const renderError = () => error && <Alert severity="error">As senhas não coincidem</Alert>;

  return (
    <>
      <Loading isActive={loading} />
      <FormSection title="Redefinir Senha" description="Defina sua nova senha">
        {renderError()}
        <Wrapper onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            required={true}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Senha"
            variant="outlined"
            className="input"
          />
          <TextField
            id="outlined-basic"
            required={true}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirme a Senha"
            variant="outlined"
            className="input"
          />
          <Button variant="contained" color="primary" className="button" type="submit">
            Alterar Senha
          </Button>
        </Wrapper>
      </FormSection>
    </>
  );
}
