import { Fade } from '@material-ui/core';
import LoginForm from '../../components/templates/Login/LoginForm';
import Wrapper from '../../components/templates/Login/Wrapper';

export default function index(): JSX.Element {
  return (
    <Fade>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </Fade>
  );
}
