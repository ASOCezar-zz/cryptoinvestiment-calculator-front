import Img from 'next/image';
import { Wrapper, Title, Value } from './styles';

type CardProps = {
  dark?: boolean;
  imgSource: string;
  title: string;
  value: string;
};

export default function Card({ dark = false, imgSource, title, value }: CardProps): JSX.Element {
  return (
    <Wrapper dark={dark}>
      <Title>{title}</Title>
      <Value dark={dark} value={+value.split('%')[0] || 0}>
        {value}
      </Value>
      <div className="icon">
        <Img width="40px" height="40px" src={imgSource} />
      </div>
    </Wrapper>
  );
}
