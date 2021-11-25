import { Button, TextField } from '@material-ui/core';
import { ReactElement } from 'react';
import FormSection from '../FormSection/FormSection';
import { Wrapper } from './styles';

export default function TokenForm(): ReactElement {
  return (
    <FormSection title="Esqueci minha senha" description="Insira o token enviado ao seu email para continuar">
      <Wrapper>
        <TextField
          id="outlined-basic"
          required={true}
          label="Código de Verificação"
          variant="outlined"
          className="input"
          type="text"
        />
        <Button variant="contained" color="primary" className="button" type="submit">
          Verificar Token
        </Button>
      </Wrapper>
    </FormSection>
  );
}
