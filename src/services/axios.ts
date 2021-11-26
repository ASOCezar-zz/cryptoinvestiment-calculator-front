import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { ParsedUrlQuery } from 'querystring';

export function getApiClient(ctx?: GetServerSidePropsContext<ParsedUrlQuery>) {
  const { 'crypto-calculator-token': access_token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.ENDPOINT_URL,
  });

  if (access_token) {
    api.defaults.headers['Authorization'] = `Bearer ${access_token}`;
  }

  return api;
}
