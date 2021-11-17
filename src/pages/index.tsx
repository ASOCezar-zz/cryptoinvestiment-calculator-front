import Home from '../components/templates/Home';
import whitPrivateRoute from '../components/global/whitPrivateRoute';

const index = () => {
  return <Home />;
};

export default whitPrivateRoute(index);
