
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Addmonuments from "./Componets/Addmonuments.js";
function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route exact path="AddMonuments" element={<Addmonuments/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}
export default App;
