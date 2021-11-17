import { Button, TextField } from '@material-ui/core';
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import FormSection from '../FormSection';

export default function PasswordResetForm(): ReactElement {
  return (
    <FormSection title="Redefinir Senha" description="Defina sua nova senha">
      <Wrapper onSubmit={(e) => console.log(e)}>
        <TextField
          id="outlined-basic"
          required={true}
          type={'password'}
          label="Senha"
          variant="outlined"
          className="input"
        />
        <TextField
          id="outlined-basic"
          required={true}
          type={'password'}
          label="Confirme a Senha"
          variant="outlined"
          className="input"
        />
        <Button variant="contained" color="primary" className="button" type="submit">
          Alterar Senha
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
