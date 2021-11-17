import { ReactElement } from 'react';
import EmailForm from './EmailForm';
import PasswordResetForm from './PasswordResetForm';

import TokenForm from './TokenForm';

type PasswordForgotTypes = {
  token?: boolean;
  resetPassword?: boolean;
};

export default function PasswordForgot({ token = false, resetPassword = false }: PasswordForgotTypes): ReactElement {
  if (token) {
    return <TokenForm />;
  }

  if (resetPassword) {
    return <PasswordResetForm />;
  }

  return <EmailForm />;
}
