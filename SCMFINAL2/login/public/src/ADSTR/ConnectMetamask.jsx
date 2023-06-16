let account;
export default async function ConnectMetamask(){
    if (window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        account = accounts[0];   
        
    } 
}