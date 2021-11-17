import { Button, TextField } from '@material-ui/core';
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import FormSection from '../FormSection';

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

const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 353px;
    gap: 16px;
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
