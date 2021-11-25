import { Button, TextField } from '@material-ui/core';
import { Alert } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { FormEvent, ReactElement, useState } from 'react';

import FormSection from '../FormSection/FormSection';
import { Wrapper } from './styles';

export default function EmailForm(): ReactElement {
  const [email, setEmail] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/forgot-password', { email })
      .then((response: AxiosResponse) => {
        console.log(response);
        setSuccess(true);
      })
      .catch((error) => console.error(error.message));
  };

  const renderSuccess = () => success && <Alert severity="success">Cheque seu email</Alert>;

  return (
    <FormSection title="Esqueci minha senha" description="Insira o email cadastrado para recuperar sua senha">
      <Wrapper onSubmit={handleSubmit}>
        {renderSuccess()}
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
        <Button variant="contained" color="primary" className="button" type="submit">
          Enviar Email
        </Button>
      </Wrapper>
    </FormSection>
  );
}
