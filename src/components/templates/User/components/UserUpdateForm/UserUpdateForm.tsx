import { Dispatch, FormEvent, SetStateAction, useContext, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import router from 'next/router';
import { Alert, Button, TextField } from '@mui/material';
import AuthContext from '../../../../../contexts/authContext';
import { IUser } from '../../../../../Interfaces/IUser';
import { api } from '../../../../../services/api';
import { InfosForm } from '../styles';

type UserUpdateForm = {
  user: IUser;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export default function UserUpdateForm({ user, setIsLoading }: UserUpdateForm) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setName(user.name);
      setEmail(user.email);
    }

    return () => {
      mounted = false;
    };
  }, [user]);

  const handleCancel = () => {
    setName(user.name);
    setEmail(user.email);
    router.push('/dashboard');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email,
      name,
    };

    await signIn({ email: user.email, password })
      .then(() => api.patch('/users/update', data))
      .then((response: AxiosResponse<IUser>) => signIn({ email: response.data.email, password }))
      .then(() => {
        setIsLoading(false);
        router.push('/dashboard');
      })
      .catch((error) => {
        const message = error.response.data.error;
        setIsLoading(false);
        if (message === 'Email Already in Use') {
          setEmailError(true);
          setPasswordError(false);
        }
        if (message === 'Invalid Password') {
          setEmailError(false);
          setPasswordError(true);
        }
      });
  };

  const renderEmailError = () => {
    if (passwordError) return <Alert severity="error">Senha Incorreta</Alert>;
    if (emailError) return <Alert severity="error">Esse email está em uso</Alert>;
  };

  return (
    <InfosForm onSubmit={handleSubmit}>
      {renderEmailError()}
      <TextField
        id="outlined-basic"
        required={false}
        type="text"
        label="Nome"
        value={name}
        onChange={async (e) => setName(e.target.value)}
        variant="outlined"
        className="input"
      />
      <TextField
        id="outlined-basic"
        required={false}
        label="Email"
        variant="outlined"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <TextField
        id="outlined-basic"
        required={true}
        label="Insira sua Senha"
        variant="outlined"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
