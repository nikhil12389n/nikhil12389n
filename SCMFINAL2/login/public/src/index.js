import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
const Context=React.createContext();
let account={"D1ADST1":"0x85e19d642d24fe428Eb9205F077a856CA8bC95B0","D1ADST2":"0x1527849623379d4B8E9493b80De864cFf94D38b7","D2ADST1":"0xdE8D7389B3278146E0D695E0fD5f1de764c0a4a3","D2ADST2":"0xb80B1D80C76Ef30B0dd6bF5b11E161A4C221E4B4","DIVISION1":"0xF68BcD86dAb0f85F71BD4888701487592a7dF19D","DIVISION2":"0x1ed66dd64c84d3bD56862DfCF065aABe985DBbe8","DGST":"0x235AdA8bB5ec133854791849ECffe62dc7039153","MANUFACTURER":"0x3b0a64ab25452f6c62FaaB1E2A7EF6177Fdf8a9e"};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Context.Provider value={account}>
      <App/>
   </Context.Provider>
);
export default Context;