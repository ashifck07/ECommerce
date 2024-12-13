import React from "react"
import { Routes ,Route} from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/authPages/Login"
import Register from "./pages/authPages/Register"
import AdminLayout from "./components/adminView/AdminLayout"
import AdminDashboard from "./pages/adminPages/AdminDashboard"
import AdminProducts from "./pages/adminPages/AdminProducts"
import AdminOrders from "./pages/adminPages/AdminOrders"
import AdminFeatures from "./pages/adminPages/AdminFeatures"
import Layout from "./components/shoppingView/Layout"
import NotFound from "./pages/notFound/NotFound"
import Home from "./pages/shoppingPages/Home"
import Listing from "./pages/shoppingPages/Listing"
import CheckOut from "./pages/shoppingPages/CheckOut"
import Account from "./pages/shoppingPages/Account"
import CheckAuth from "./components/common/CheckAuth"
import UnAuth from "./pages/unAuthPages/UnAuth"

function App() {
  const isAuthenticated =false;
  const user = {
    name: "ashif",
    role:"user"
  };

  return (
      <div className='flex flex-col overflow-hidden bg-white'>
       <Routes>
        <Route path="auth" element = {
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >
               <AuthLayout />
          </CheckAuth>
          }>
          <Route path="login" element= {<Login />} />
          <Route path="register" element= {<Register />} />
        </Route>
        <Route path="admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >
               <AdminLayout />
          </CheckAuth>}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="shop" element={
           <CheckAuth isAuthenticated={isAuthenticated} user={user} >
              <Layout />
          </CheckAuth>
        }>
            <Route path="home" element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="unauth-page" element={<UnAuth />} />
       </Routes>
       


    

      
      </div>
  )
}

export default App
