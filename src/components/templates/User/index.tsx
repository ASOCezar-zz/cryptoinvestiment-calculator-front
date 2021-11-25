import { Avatar } from '@mui/material';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IUser } from '../../../Interfaces/IUser';
import Loading from '../../global/Loading';
import { FormsWrapperComponent } from './components';

type UserComponentProps = {
  user: IUser;
};

export default function UserTemplate({ user }: UserComponentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Loading isActive={isLoading} />
      <Template>
        <Avatar style={style}>{user?.name.split('')[0]}</Avatar>
        <FormsWrapperComponent user={user} setIsLoading={setIsLoading} />
      </Template>
    </>
  );
}

const style = {
  maxWidth: '200px',
  maxHeight: '200px',
  width: '18vw',
  height: '18vw',

  fontSize: 'clamp(10px, 5vw, 90px)',
};

const Template = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    padding: 20px;
    background: ${theme.colors.secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
