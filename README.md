# 🟡 Bitcoin NodeJS API

Simple Bitcoin API: easily create wallets and check balances.

## Installation

NPM

```bash
  npm install bitcoin-nodejs
```

YARN

```base
  yarn add bitcoin-nodejs
```

## Example

```javascript
const { createWallet, getBalance, getWallet } = require('bitcoin-nodejs');

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
```

## Functions

- `createWallet({ network: "mainnet", "testnet" })`
  - `network: "mainnet" || "testnet"`
- `getBalance({ address: "...", inSatoshi: true })`

  - `address: Wallet public address`
  - `isSatoshi: true || false`

- `getWallet({ address: "..." })`
  - Object:
  ```javascript
  {
     address: '1GSiT5ZUm85ECZswyu49maJmteCabosUGL',
     total_received: 0,
     total_sent: 0,
     balance: 0,
     unconfirmed_balance: 0,
     final_balance: 0,
     n_tx: 0,
     unconfirmed_n_tx: 0,
     final_n_tx: 0,
     tx_url: 'https://api.blockcypher.com/v1/btc/main/txs/'
  }
  ```

## To-do

[ ] Transactions - Send transactions

## Buy me a coffee

If you liked it and want this project to stay active, buy me a coffee.

    BTC: 1KmZyRhAVcAMH8vJKcGPNp5QpCJ3HNZgzv
    ETH: 0x42eF534C4172b02351b90A4184bedCD8bcfE8eE6
    LTC: LbendKmgoYy8hgMMZMWtxNNNjeJh5CYo7Q
