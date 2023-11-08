const { Web3 } = require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3(
  "https://holy-crimson-flower.ethereum-sepolia.quiknode.pro/07ea4e5501a00b820376576fecca65f5bbb34307/"
);
const contractAddress = "0x6c3dF67f0991eD1DAa1b41E018E16FA94603B65b";
const contract = new web3.eth.Contract(ABI, contractAddress);

module.exports = { contract };
