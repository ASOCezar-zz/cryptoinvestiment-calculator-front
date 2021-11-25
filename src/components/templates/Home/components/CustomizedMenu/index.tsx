import { useContext, useState } from 'react';
import { StyledMenu } from './styles';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, MenuItem } from '@mui/material';
import { api } from '../../../../../services/api';
import InvestimentsContext from '../../../../../contexts/investimentsContext';
import router from 'next/router';
import Modal from '../Modal/Modal';

type CustomizedMenuProps = {
  id: number;
};

export function CustomizedMenu({ id }: CustomizedMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [openModal, setOpenModal] = useState<boolean>();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const { setChanged } = useContext(InvestimentsContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    await api.delete(`/investiments/delete/${id}`);
    setChanged((prevState) => !prevState);
    handleClose();
  };

  const handleEdit = () => {
    router.push(`/dashboard/investiment/${id}`);
    handleClose();
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit} style={{ fontSize: '15px' }} disableRipple>
          <EditIcon style={{ width: '20px' }} />
          Editar
        </MenuItem>
        <MenuItem style={{ fontSize: '15px' }} onClick={handleOpenModal} disableRipple>
          <DeleteIcon color="error" style={{ width: '20px' }} />
          Excluir
        </MenuItem>

        <Modal open={openModal} handleCloseModal={handleCloseModal} handleDelete={handleDelete} />
      </StyledMenu>
    </>
  );
}
