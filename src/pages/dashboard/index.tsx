import DashboardTemplate from '../../components/templates/Home';
import withPrivateRoute from '../../components/global/withPrivateRoute';
import { InvestimentProvider } from '../../contexts/investimentsContext';

const Dashboard = () => {
  return (
    <InvestimentProvider>
      <DashboardTemplate />
    </InvestimentProvider>
  );
};

export default withPrivateRoute(Dashboard);
