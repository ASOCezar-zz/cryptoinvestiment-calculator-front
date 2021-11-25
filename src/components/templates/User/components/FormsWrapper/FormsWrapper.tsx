import { Dispatch, SetStateAction, useState } from 'react';
import { IUser } from '../../../../../Interfaces/IUser';
import Option from '../Option/Option';
import PasswordUpdateForm from '../PasswordUpdateForm/PasswordUpdateForm';
import UserUpdateForm from '../UserUpdateForm/UserUpdateForm';
import { Forms, Wrapper } from './styles';

type FormsWrapperProps = {
  user: IUser;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export default function FormsWrapper({ user, setIsLoading }: FormsWrapperProps) {
  const [changedForm, setChangedForm] = useState<boolean>(false);

  const handleChange = () => {
    setChangedForm(!changedForm);
  };

  return (
    <Wrapper>
      <div className="selectionGroup">
        <Option option="Nome e Email" handleChange={handleChange} />
        <Option option="Senha" defaultChecked={true} handleChange={handleChange} />
      </div>
      <Forms changed={changedForm}>
        <UserUpdateForm user={user} setIsLoading={setIsLoading} />
        <PasswordUpdateForm user={user} setIsLoading={setIsLoading} />
      </Forms>
    </Wrapper>
  );
}
