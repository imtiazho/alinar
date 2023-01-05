import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import HomeMain from "./Components/Home/HomeMain/HomeMain";
import Sharee from "./Components/Home/Sharee/Sharee";
import ThreePis from "./Components/Home/ThreePis/ThreePis";
import NavBar from "./Components/Home/Navbar/NavBar";
import Footer from "./Components/Home/Footer/Footer";
import ShareeDetails from "./Components/Home/Sharee/ShareeDetails";
import ThreePisDetails from "./Components/Home/ThreePis/ThreePisDetails";
import Abaya from "./Components/Home/Abaya/Abaya";
import AbayaCardDetails from "./Components/Home/Abaya/AbayaCardDetails";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import ShopProductDetails from "./Components/Shop/ShopProductDetails";
import BestSellingProductsDetails from "./Components/Home/BestSellingProduct/BestSellingProductsDetails";
import Cart from "./Components/Cart/Cart";
import ShipingInfo from "./Components/ShipingInfo/ShipingInfo";
import ConfirmOrder from "./Components/ConfirmOrder/ConfirmOrder";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import BlogPage from "./Components/BlogPage/BlogPage";
import Spinner from "./Components/Spinner/Spinner";
import TermsAndPrivacy from "./Components/TermsAndPrivacy/TermsAndPrivacy";
import RequireAuth from "./RequireAuth/RequireAuth";
import UserProfile from "./Components/UserProfile/UserProfile";
import MyOrders from "./Components/MyOrders/MyOrders";
import AllOrders from "./Components/AllOrders/AllOrders";
import AllUsers from "./Components/AllUsers/AllUsers";
import Imgbb from "./Components/Imgbb/Imgbb";
import EditProfile from "./Components/EditProfile/EditProfile";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [shippingInfoToFinal, setShippingInfoToFinal] = useState({});

  return (
    <CartContext.Provider
      value={{
        cartState: [cart, setCart],
        shippingInfoState: [shippingInfoToFinal, setShippingInfoToFinal],
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeMain></HomeMain>}>
          <Route index element={<Sharee />}></Route>
          <Route path="/abaya" element={<Abaya />}></Route>
          <Route path="/3pis" element={<ThreePis />}></Route>
        </Route>
        <Route
          path="/shareeDetails/:shareeId"
          element={<ShareeDetails />}
        ></Route>
        <Route
          path="/threePisDetails/:threePisDetailsId"
          element={<ThreePisDetails />}
        ></Route>
        <Route
          path="/abayaDetails/:abayaDetailsId"
          element={<AbayaCardDetails />}
        ></Route>
        <Route
          path="/shopProductDetail/:shopProductDetailsId"
          element={<ShopProductDetails />}
        ></Route>
        <Route
          path="/bestSellingProduct/:bestSellingProductDetailsId"
          element={<BestSellingProductsDetails />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
        <Route path="/img" element={<Imgbb />}></Route>
        <Route path="/shipping" element={
          <RequireAuth>
            <ShipingInfo />
          </RequireAuth>
        }></Route>
        <Route path="/confirmOrder" element={
          <RequireAuth>
            <ConfirmOrder />
          </RequireAuth>
        }></Route>
        <Route path="/userprofile" element={
          <RequireAuth>
            <UserProfile />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path="allOrders" element={<AllOrders />}></Route>
          <Route path="allUsers" element={<AllUsers />}></Route>
        </Route>
        <Route path="/blogDetails" element={<BlogDetails />}></Route>
        <Route path="/termsAndPrivacy" element={<TermsAndPrivacy />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </CartContext.Provider>
  );
}

export default App;
