require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone struggle recipe stick hover gesture brave army gauge'; 
let testAccounts = [
"0x8bd034ab5c3b9ac9e4f12b82293193ea575edb7a738dfb074e6734249575951b",
"0x368958e16b67d067e023078e596d1cde713e3137fd2f9eb15e50eb158d96b386",
"0xfbc14470d57624f6da81895c66e768145af16c7b0c3d7426871ae8fd6580f081",
"0x41c984b018c7a7f5cef845d39ee6b73d542ab62a4391cd59cdbc393a6f947ac9",
"0xc8425f9c7db65f051db829773d58ad8aa6415d57094d92b4694737cb74325fab",
"0x33089f5bffb8ea2c3c0949078cad9cdf8558b5a59091e93aef48028a8502ae42",
"0x550084272ab82e48b5e865e1e782e42f06756df692fb824b6e11b9710b4638d0",
"0xb1466d11df04b11f6d766398366feb2e846dc963a846c5ab66aa155b95f9fa0d",
"0x1191767efe9a707dbe1363bc4f517d12c65c2b6428ace791db7f976c893c5ac2",
"0x3c8693d7e8e5f4fcb50332b7121f08315f5f88b9a7fcd5c1c7eb66855756f66b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
