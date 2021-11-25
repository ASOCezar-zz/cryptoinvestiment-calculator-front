import Image from 'next/image';
import bitcoin from '../assets/coins/bitcoin.svg';
import ethereum from '../assets/coins/ethereum.svg';
import litecoin from '../assets/coins/litecoin.svg';
import ripple from '../assets/coins/ripple.svg';
import binance_coin from '../assets/coins/binance.svg';

export default function renderIcon(name: string) {
  switch (name) {
    case 'bitcoin':
      return <Image src={bitcoin} />;
    case 'ethereum':
      return <Image src={ethereum} />;
    case 'litecoin':
      return <Image src={litecoin} />;
    case 'ripple':
      return <Image src={ripple} />;
    case 'binance_coin':
      return <Image src={binance_coin} />;
  }
}
