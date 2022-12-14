import './App.css';
import { Routes, Route } from "react-router-dom"
import HomeMain from './Components/Home/HomeMain/HomeMain';
import Sharee from './Components/Home/Sharee/Sharee';
import Panjabi from './Components/Home/Panjabi/Panjabi';
import ThreePis from './Components/Home/ThreePis/ThreePis';
import AllProducts from './Components/Home/AllProducts/AllProducts';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeMain></HomeMain>}>
          <Route path='/allProducts' element={<AllProducts />}></Route>
          <Route path='/sharee' element={<Sharee />}></Route>
          <Route path='/panjabi' element={<Panjabi />}></Route>
          <Route path='/3pis' element={<ThreePis />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
