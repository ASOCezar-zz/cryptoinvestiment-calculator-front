import { Button } from '@mui/material';
import { Content, Wrapper } from './styles';

type ModalProps = {
  open: boolean;
  handleDelete: () => void;
  handleCloseModal: () => void;
};

const style = {
  height: '5vw',
  maxHeight: '62px',
};

export default function Modal({ open, handleDelete, handleCloseModal }: ModalProps) {
  return (
    <Wrapper open={open}>
      <div className="modalBackground" onClick={handleCloseModal}></div>
      <Content>
        <h1>Excluir investimento</h1>
        <em>Você tem certeza que deseja excluir esse investimento?</em>

        <div className="buttons">
          <Button variant="outlined" style={style} onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="error"
            style={style}
            className="exclude_button"
            onClick={handleDelete}
            type="submit"
          >
            Excluir
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}
