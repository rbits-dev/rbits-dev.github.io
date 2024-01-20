"use strict";

const Web3Modal = window.Web3Modal.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
const WalletConnectProvider = window.WalletConnectProvider.default;

let nftContract;

let provider;
let web3Modal;
let selectedAccount;
var web3;
var myTimeout;


function init() {

  if(location.protocol !== 'https:') {
    //console.log("Do not connect with your wallet in a non secure environment.");
    //return;
  }

  const providerOptions = {
    
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: 'https://mainnet.infura.io/v3/',
          56: 'https://bsc-dataseed.binance.org/',
          1285: 'https://rpc.api.moonriver.moonbeam.network',
          137: 'https://rpc-mainnet.maticvigil.com',
        },
      }
    },

  };

  web3Modal = new Web3Modal(
    {
      theme: "dark",
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    }
  );

  web3Modal.updateTheme({
    background: "rgba(0, 0, 0, 0.5)",
    main: "rgb(199, 199, 199)",
    secondary: "rgb(136, 136, 136)",
    border: "rgba(195, 195, 195, 0.14)",
    hover: "rgb(16, 26, 32)"
  });

}
const balanceOfABI = [
  {
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "name": "balance",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
];


async function canPlay() {

 return true;
}

async function getMyNFTs() {

  loadDefaultSpaceShip();
}

async function onConnect() {
  getMyNFTs();
  document.querySelector("#connected").style.display = "block";
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#introtext").style.display = "none";
  document.querySelector("#starttext").style.display = "block";
  console.log("connected");
}

async function onDisconnect() {
  console.log("disconnected");
}

window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});