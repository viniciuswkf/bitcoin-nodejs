const { createWallet, getBalance, getWallet } = require('./index');

async function test() {
  const { privateKey, address } = createWallet({ network: 'mainnet' });
  console.log(`Private Key: ${privateKey}\nAddress: ${address}`);
  // Private Key: 8d4da74160b4bcd2c363ebb1a49f95e572667d5
  // Address: 1JRC8aUgdVc1tBYfdvrZUsbwyKv81qhSTB

  const balance = await getBalance({ address, inSatoshi: false });
  console.log(balance);
  // 2450

  const balanceInSatoshi = await getBalance({ address, inSatoshi: true });
  console.log(balanceInSatoshi);
  // 0.0002450

  const wallet = await getWallet({ address });
  console.log(wallet);
  // { address, total_received, total_sent, ... }
}

test();
