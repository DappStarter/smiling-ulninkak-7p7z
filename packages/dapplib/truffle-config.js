require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note stick miss harvest infant success subject'; 
let testAccounts = [
"0x573222aef3dff9f50ce62d0ee5c6e6b8a93bf9bce3247b041a4d69352202af47",
"0x6cccffb01f0c55509bae00c1152eedcc53356d83bf7a43269b4a517004292010",
"0x4c5eed066c14a1eb8fc1e8916bffb7c1715bad6af0c5717fa9edce2a2fb5cdcc",
"0x3d3481cb05e0831646f1afb94b0d7ee816b41c72330164f1e70f5d7f37b021e6",
"0xe1c3c2d07863bd31763a5ce352e44f8c56d13305cf1a1b7fa92b5aaa17a86884",
"0x273df0735660b15ccd37392aa4c04d04e2a4f2f3bc4a73c8f34e5cdc9928935c",
"0x0c2762b4b5453b553cc422930033d7ab4d3864062d01e0fe7eb0315ef73f586b",
"0x6da81df1a13c0366d23c23a90c82fe896a3427f5289db20eefd4db951e3f4a66",
"0x65bce6b8fc98066b9e9ebedfbe66eb2a214809076fd47ac114ace8889eff2514",
"0x3a3bb21313426159add2c3fa731d92a9711b84dd4b60f36f989bae933967991b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


