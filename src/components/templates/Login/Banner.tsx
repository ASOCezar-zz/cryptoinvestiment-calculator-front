import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import Img from 'next/image';
import background from '../../../assets/background.jpg';
import bannerIcon from '../../../assets/banner_icon.svg';

export default function Banner(): ReactElement {
  return (
    <Wrapper>
      <Img src={background} className="background" />
      <div className="infos">
        <Img src={bannerIcon} className="icon" />
        <h1> Crypto Investiment Calculator </h1>
        <span> Gerencie seu investimento em Criptomoedas de forma simples, fácil e rápida </span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 2;
    max-height: 100vh;
    position: relative;

    background-image: linear-gradient(360deg, #1f1e5a 21.81%, rgba(31, 30, 90, 0.7) 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .infos {
      width: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-inline: 5vw;
      inset-block-end: 80px;
      color: ${theme.colors.white};
      text-align: center;
      gap: 22px;

      h1 {
        margin-top: 85px;
      }
    }

    .background {
      z-index: -1;
      width: 100%;
    }
  `}
`;
