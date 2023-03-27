
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/linkvisit/D1'
import Login from './pages/linkvisit/D2'
import Menu from './pages/linkvisit/D3'
import Z from "./pages/linkvisit/Ofz"
import S from "./pages/linkvisit/Ofs"
import W from "./pages/linkvisit/Ofads"
import R from "./pages/linkvisit/DD"
import Addf from "./pages/linkvisit/addfamily"
import Addrev from "./pages/linkvisit/addreview"
import Otp from "./pages/linkvisit/Otp"
import Otpdisplay from "./pages/linkvisit/Otpdisplay"
import Cartview from "./pages/linkvisit/Cart"
import Pds from "./pages/linkvisit/Paydelselect"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/otp/:iduser" exact element={<Otp/>}/>
      <Route path="/otpdisplay/:iduser" exact element={<Otpdisplay/>}/>
      <Route path="/cartview/:iduser" exact element={<Cartview/>}/>
      <Route path="/menu/:iduser" exact element={<Menu/>}/>
      <Route path="/paydelselect/:orderid" exact element={<Pds/>}/>
      <Route path="/z" exact element={<Z/>}/>
      <Route path="/S" exact element={<S/>}/>
      <Route path="/W" exact element={<W/>}/>
      <Route path="/R" exact element={<R/>}/>
      <Route path="/Addf" exact element={<Addf/>}/>
      <Route path="/Addrev" exact element={<Addrev/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
