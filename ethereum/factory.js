import web3 from './web3';
import FundraiserFactory from './Build/FundraiserFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(FundraiserFactory.interface),
  '0x8d9ba1FFC3ae6FCF47D54Ee5bB585F6Ca09D3d90'
);

export default instance;
