import { Button, TextField } from '@material-ui/core';
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import FormSection from '../FormSection';

export default function EmailForm(): ReactElement {
  return (
    <FormSection title="Esqueci minha senha" description="Insira o email cadastrado para recuperar sua senha">
      <Wrapper>
        <TextField
          id="outlined-basic"
          required={true}
          label="Email"
          variant="outlined"
          className="input"
          type="email"
        />
        <Button variant="contained" color="primary" className="button" type="submit">
          Enviar Email
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
