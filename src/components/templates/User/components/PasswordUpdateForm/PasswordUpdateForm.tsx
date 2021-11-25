import { Alert, Button, TextField } from '@mui/material';
import { AxiosResponse } from 'axios';
import router from 'next/router';
import { Dispatch, FormEvent, SetStateAction, useContext, useState } from 'react';
import AuthContext from '../../../../../contexts/authContext';
import { IUser } from '../../../../../Interfaces/IUser';
import { api } from '../../../../../services/api';
import { InfosForm } from '../styles';

type PasswordUpdateProps = {
  user: IUser;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export default function PasswordUpdateForm({ user, setIsLoading }: PasswordUpdateProps) {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [oldPasswordError, setOldPasswordError] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext);

  const handleSubmitPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      oldPassword,
      password,
      confirmPassword,
    };

    await signIn({ email: user.email, password: oldPassword })
      .then(() => api.patch('/users/update', data))
      .then((response: AxiosResponse<IUser>) => signIn({ email: response.data.email, password }))
      .then(() => {
        setIsLoading(false);
        router.push('/dashboard');
      })
      .catch((error) => {
        const message = error.response.data.error;
        setIsLoading(false);
        if (message === 'Password and Confirmation Does Not Match') {
          setPasswordError(true);
          setOldPasswordError(false);
        }
        if (message === 'Invalid Password') {
          setPasswordError(false);
          setOldPasswordError(true);
        }
      });
  };

  const handleCancel = () => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
    router.push('/dashboard');
  };

  const renderPasswordError = () => {
    if (oldPasswordError) return <Alert severity="error">Senha antiga inválida</Alert>;
    if (passwordError) return <Alert severity="error">As senhas não se correspondem</Alert>;
  };

  return (
    <InfosForm onSubmit={handleSubmitPassword}>
      {renderPasswordError()}
      <TextField
        id="outlined-basic"
        required={true}
        type="password"
        label="Senha Antiga"
        value={oldPassword}
        onChange={async (e) => setOldPassword(e.target.value)}
        variant="outlined"
        className="input"
      />
      <TextField
        id="outlined-basic"
        required={true}
        label="Nova Senha"
        variant="outlined"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <TextField
        id="outlined-basic"
        required={true}
        label="Confirmar Senha"
        variant="outlined"
        className="input"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
      />
      <div className="buttons">
        <Button variant="contained" color="error" className="cancel_button" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" className="save_button" type="submit">
          Salvar
        </Button>
      </div>
    </InfosForm>
  );
}
