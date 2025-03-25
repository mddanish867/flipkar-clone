import AccountPage from "./app/account/Account"
import LoginPage from "./app/auth/LoginPage"
import CartPage from "./app/cart/CartPage"
import CheckoutPage from "./app/checkout/CheckoutPage"
import Home from "./app/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProductDetailPage from "./app/products/ProductDetailPage"
import ProductsPage from "./app/products/ProductsPage"
import SignupPage from "./app/auth/SignupPage"
import WishlistPage from "./app/wishlist/WishlistPage"
function App() {

  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/account" element={<AccountPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/checkout" element={<CheckoutPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/product-details" element={<ProductDetailPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/wishlist" element={<WishlistPage/>}/>

    </Routes>
   </Router>
   </>
  )
}

export default App
