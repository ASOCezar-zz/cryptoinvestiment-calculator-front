import { ReactElement } from 'react';
import Link from 'next/link';
import { Section } from './styles';

type FormSectionType = {
  title: string;
  description: string;
  children: ReactElement | ReactElement[];
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
