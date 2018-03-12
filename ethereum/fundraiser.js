import web3 from "./web3";
import Fundraiser from "./Build/Fundraiser.json";

export default address => {
  return new web3.eth.Contract(JSON.parse(Fundraiser.interface), address);
};
