const bitcore = require('bitcore-lib');
const axios = require('axios').default;

const getBalanceApi = (address) =>
  `https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`;

const getWalletApi = (address) =>
  `https://api.blockcypher.com/v1/btc/main/addrs/${address}?unspentOnly=true`;

async function getWallet({ address }) {
  const res = await axios.get(getWalletApi(address));
  return res.data;
}

async function getBalance({ address, inSatoshi }) {
  const res = await axios.get(getBalanceApi(address));

  if (inSatoshi) return (res.data.balance / 100000000).toFixed(8);

  return res.data.balance;
}

function createWallet({ network }) {
  var privateKey = new bitcore.PrivateKey();
  var address = privateKey.toAddress();

  var publicKey = privateKey.toPublicKey();
  var address = publicKey.toAddress(bitcore.Networks[network]);

  const walletPrivateKey = privateKey.toWIF();

  return { address, privateKey: walletPrivateKey };
}

module.exports = { createWallet, getWallet, getBalance };
