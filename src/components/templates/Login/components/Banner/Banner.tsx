import { ReactElement } from 'react';
import Img from 'next/image';
import background from '../../../../../assets/background.jpg';
import bannerIcon from '../../../../../assets/banner_icon.svg';
import { Wrapper } from './styles';

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
