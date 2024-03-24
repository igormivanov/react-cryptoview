import { useState } from "react";
import { DropdownCard, HeaderContainer, HomePageButton, MetaMaskDropDown, MobileIcon, MobileWalletButton, MobileWalletButton2, Title, WalletButton } from "./styles";
import { PiHouse, PiWallet } from "react-icons/pi";
import { getBalance, getMetaMaskProvider } from "../../service/MetaMaskService";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { toast } from "react-toastify";

export function Header(){

  const [isConnected, setConnectedStatus] = useState(false)
  const [open, setOpen] = useState(false)
  const [eth, setEth] = useState('')

  async function handleConnectWallet(){
    const {accounts} = await getMetaMaskProvider()
    toast.success('Conectado a MetaMask')
    setConnectedStatus(true)
    const eth = await getBalance(accounts[0])
    setEth(eth)
  }

  function handleMobileButton(){
    if(isConnected){
      setOpen((prevState) => !prevState)
    } else {
      handleConnectWallet()
    }
  }

  return (
    <HeaderContainer>
      <Title>Cryptoview</Title>
      <nav>
        <ul>
          <MobileIcon to="/"><PiHouse size={24}/></MobileIcon>
          <li>
            <HomePageButton to="/">Página inicial</HomePageButton>
          </li>
          {isConnected ? 
            <MobileWalletButton2>
              Saldo: {eth} ETH
            </MobileWalletButton2>   
          :
            <MobileWalletButton onClick={handleMobileButton}>
              <PiWallet size={24}/>
            </MobileWalletButton>
          }
          {isConnected ?
            <MetaMaskDropDown onClick={() => setOpen((prevState) => !prevState)}>
              <div>  
                {open ? <AiFillCaretDown size={14}/> : <AiFillCaretUp size={14}/>}
                Conectado a MetaMask
              </div>
              <DropdownCard open={open}>
                <div>
                  <p>Saldo:</p>
                  <p>{eth}</p>
                </div>
              </DropdownCard>
          </MetaMaskDropDown>
          : 
          <WalletButton onClick={handleConnectWallet}>
            Conectar com a MetaMask
          </WalletButton>
        }

        </ul>
      </nav>
    </HeaderContainer>
  )
}