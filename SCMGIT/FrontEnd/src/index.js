import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './pages/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
const Context = React.createContext();
const myObjectString = process.env.REACT_APP_Object;
const myObject = JSON.parse(myObjectString);
let account = myObject;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Context.Provider value={account}>
         <ToastContainer />
         <App />
      </Context.Provider>
   </BrowserRouter>
);
export default Context;