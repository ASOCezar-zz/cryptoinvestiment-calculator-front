import InvestimentTemplate from '../../../components/templates/Investiment/index';
import { IInvestimentsContext } from '../../../contexts/investimentsContext';
import { GetServerSidePropsContext } from 'next';
import { getApiClient } from '../../../services/axios';
import { AxiosResponse } from 'axios';
import Router from 'next/router';

type InvestimentPageProps = {
  investiment: void | IInvestimentsContext;
};

function Investiment({ investiment }: InvestimentPageProps) {
  return <InvestimentTemplate investiment={investiment} />;
}

Investiment.getInitialProps = async (ctx: GetServerSidePropsContext) => {
  const { slug } = ctx.query;
  const api = getApiClient(ctx);

  if (slug === 'new') return { props: {} };
  const investiment = await api
    .get(`/investiments/${slug}`)
    .then((response: AxiosResponse<IInvestimentsContext>) => response.data)
    .catch(() => {
      if (ctx.res) {
        ctx.res?.writeHead(302, {
          Location: '/dashboard',
        });
        ctx.res?.end();
      } else {
        Router.replace('/dashboard');
      }
    });

  return {
    investiment,
  };
};

export default Investiment;
