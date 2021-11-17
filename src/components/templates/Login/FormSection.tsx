import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

type FormSectionType = {
  title: string;
  description: string;
  children: ReactElement;
  login?: boolean;
};

export default function FormSection({ title, description, children, login = false }: FormSectionType): ReactElement {
  const renderRedirectLinks = () =>
    login ? (
      <>
        <p>Ainda não tem uma conta?</p>
        <Link href="/login/cadastro">Crie uma conta agora</Link>
      </>
    ) : (
      <>
        <p>Já possui uma conta?</p>
        <Link href="/login">Clique aqui</Link>
      </>
    );

  return (
    <Section>
      <h1>{title}</h1>
      <span>{description}</span>
      {children}
      <div className="redirect-link">{renderRedirectLinks()}</div>
    </Section>
  );
}

const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 2;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-inline: 5vw;
    gap: 48px;
    color: ${theme.colors.gray};

    .redirect-link {
      width: 100%;
      display: inline-block;

      a {
        text-decoration: none;
        font-weight: 900;
        color: ${theme.colors.primaryColor};
      }
    }
  `}
`;
