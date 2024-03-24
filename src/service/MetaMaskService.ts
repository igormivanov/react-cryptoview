import { toast } from "react-toastify"
import Web3 from "web3"

  export const getMetaMaskProvider = async () => {
    if(!window.ethereum){
      toast.error('Você não possui a Metamask instalada')
    }

    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.requestAccounts();

    if(!accounts || !accounts.length) {
      console.log("Erro durante a conexão com a conta")
    }
    
    return {
      web3,
      accounts
    };
  }

  export const getBalance = async (address: string) => {
    const {web3} = await getMetaMaskProvider()
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, "ether");
  }


