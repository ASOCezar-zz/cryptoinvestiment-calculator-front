import { Avatar, Badge, Button, Menu } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import AuthContext from '../../contexts/authContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem } from '@mui/material';
import Link from 'next/link';
import nookies from 'nookies';
import router from 'next/router';

export default function Header() {
  const { user } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    nookies.destroy(undefined, 'crypto-calculator-token');
    router.push('login');
  };

  return (
    <Container>
      <div className="menu">
        <Badge
          overlap="circular"
          color="primary"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar>{user?.name.split('')[0]}</Avatar>
        </Badge>

        <h3>{user?.name}</h3>

        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        ></Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Link href="/user">
            <MenuItem style={style}>Configurações</MenuItem>
          </Link>
          <MenuItem style={style} onClick={handleLogout}>
            Sair
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
}

const style = {
  fontSize: 'clamp(10px, 3vw, 15px)',
};

const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;

    border: 1px solid ${theme.colors.lightGrey};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    justify-content: center;
    align-items: flex-end;
    padding-inline-end: 5vw;
    padding-block: 20px;

    .menu {
      display: flex;
      flex-direction: row;
      height: 100%;

      align-items: center;
      justify-content: center;

      gap: 15px;

      h3 {
        font-size: clamp(10px, 5vw, 18px);
      }
    }
  `}
`;
