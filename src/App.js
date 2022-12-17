import './App.css';
import { Routes, Route } from "react-router-dom"
import HomeMain from './Components/Home/HomeMain/HomeMain';
import Sharee from './Components/Home/Sharee/Sharee';
import ThreePis from './Components/Home/ThreePis/ThreePis';
import NavBar from './Components/Home/Navbar/NavBar';
import Footer from './Components/Home/Footer/Footer';
import ShareeDetails from './Components/Home/Sharee/ShareeDetails';
import ThreePisDetails from './Components/Home/ThreePis/ThreePisDetails';
import Abaya from './Components/Home/Abaya/Abaya';
import AbayaCardDetails from './Components/Home/Abaya/AbayaCardDetails';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeMain></HomeMain>}>
          <Route path='/sharee' element={<Sharee />}></Route>
          <Route path='/abaya' element={<Abaya />}></Route>
          <Route path='/3pis' element={<ThreePis />}></Route>
        </Route>
        <Route path='/shareeDetails/:shareeId' element={<ShareeDetails />}></Route>
        <Route path='/threePisDetails/:threePisDetailsId' element={<ThreePisDetails />}></Route>
        <Route path='/abayaDetails/:abayaDetailsId' element={<AbayaCardDetails />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
