import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carts from "./Components/Carts";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Pagenotfound from "./Components/Pagenotfound";
import QrcodeForm from "./Components/QrcodeForm";
import Register from "./Components/Register";

import HomeAdmin from "./ModificationsAdmin/HomeAdmin.js"
import AddMonuments from "./ModificationsAdmin/Monuments/AddMonuments.js"
import UpdateMonuments from './ModificationsAdmin/Monuments/UpdateMonuments.js'
import ReadMonuments from "./ModificationsAdmin/Monuments/ReadDocuments.js";
import DeleteDocuments from "./ModificationsAdmin/Monuments/DeleteDocuments.js"
import ReadUsers from "./ModificationsAdmin/Users/ReadUsers";



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="Login" element={<Login />}></Route>
          <Route exact path="register" element={<Register />}></Route>
          <Route exact path="/admin" element={<HomeAdmin />}>
            <Route exact path="AddMonuments" element={<AddMonuments />}></Route>
            <Route exact path="ReadDocuments" element={<ReadMonuments />}></Route>
            <Route exact path="DeleteDocuments" element={<DeleteDocuments />}></Route>
            <Route exact path="UpdateDocuments" element={< UpdateMonuments/>}></Route>
            <Route exact path="ReadUsers" element={< ReadUsers/>}></Route>
          </Route>
          <Route exact path="*" element={<Pagenotfound/>}></Route>
          <Route exact path="/carts" element={<Carts/>}></Route>
          <Route exact path="/:email/:id" element={<QrcodeForm/>}></Route>
          <Route exact path="/cart/:email/:id" element={<QrcodeForm/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}
export default App;