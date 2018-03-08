import web3 from './web3';
import FundraiserFactory from './build/FundraiserFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(FundraiserFactory.interface),
  '0x6476A1ce751D245bE956E0EcFfEFC62463190e14'
);

export default instance;
