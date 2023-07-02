import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/AboutPage/AboutPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ProductListContainer from "../components/ProductListContainer/ProductListContainer";
import ProductDetailPage from "../components/ProductDetailPage/ProductDetailPage";
import CartPage from "../components/CartPage/CartPage";
import SignInForm from "../components/SignInForm/SignInForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";




const AppRouter = () => {

  const { user } = useContext(AuthContext);


  return (
    <BrowserRouter>
      <NavBar />
      {user.logged ? (
        <>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
