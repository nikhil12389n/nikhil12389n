import React from 'react';
import myImage from './A-Guide-to-Understand-Blockchain-Consensus-Algorithms.gif';
import myImage1 from './OIP.jpeg';
import myImage2 from "./unnamed.jpg";
import img from "./kll.jpg";
import img1 from "./WhatsApp Image 2023-07-19 at 11.10.44.jpg"
import img2 from "./WhatsApp Image 2023-07-19 at 11.11.12.jpg"
import img3 from "./WhatsApp Image 2023-07-19 at 11.41.53.jpg";
import "./Home.css";
const Homepage = () => {
  window.document.body.style.backgroundColor = "#EEEEEE";


  return (


    <div className="container-fluid my-4">
      <div className="container-fluid text-center" >
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner d-flex " >
            <div className="carousel-item active">
              <img src={myImage} className="d-block w-100 " height="500px" alt="..." />
            </div>

            <div className="carousel-item ">
              <div className='row'>
                <div className='col-md-6'>
                  <img src={myImage1} className="d-block w-100" height="500px" alt="..." />
                </div>
                <div className='col-md-6'>
                  <h3>Ganache</h3>
                  <p>Web3 development has never been more in vogue than now, with frantic activity in the Web3 and decentralized application (dApp) fields. However, when developing dApps you might find that Web3 development is unnecessarily convoluted. This is partly due to the fact that Web3 development still has not evolved to the same extent as traditional Web2 development. This, by extension, is not particularly strange, since as the dApp scene remains somewhat in its infancy. However, Web3 development is still booming, and there are some useful tools and platforms to aid development. You will likely already know that Moralis provides the best blockchain middleware for dApp development, with an impressive suite of powerful features. Moralis should always be your go-to choice for building dApps – but you can supercharge your development by learning more about other Moralis-compatible tools, like Ganache.
                    When developing dApps, it is highly beneficial to set up a local Ethereum blockchain where your dApps can be tested in a safe environment. This is precisely what Ganache does, which is why this article will take a closer look at what Ganache is and why we need a local blockchain.
                    Furthermore
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className='row'>
                <div className='col-md-5'>
                  <img src={myImage2} className="d-block w-100" height="500px" alt="..." />
                </div>
                <div className='col-md-6'>
                  <h3>Metamask</h3>
                  <p>MetaMask allows users to store and manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect to decentralized applications through a compatible web browser or the mobile app's built-in browser.[5][6]

                    Websites or other decentralized applications are able to connect, authenticate, and/or integrate other smart contract functionality with a user's MetaMask wallet (and any other similar blockchain wallet browser extensions) via JavaScript code that allows the website to send action prompts, signature requests, or transaction requests to the user through MetaMask as an intermediary.[citation needed]

                    The application includes an integrated service for exchanging Ethereum tokens by aggregating several decentralized exchanges (DEXs) to find the best exchange rate. This feature, branded as MetaMask Swaps, charges a service fee of 0.875% of the transaction amount.[7]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
      </div> 


    </div>
  );
}

export default Homepage;