import logo from './logo.svg';
import CartProvider from '../src/context/cartContext';
import AuthProvider from './pages/Admin/context/AuthContext';
import { router } from './route';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.scss';
import HomePage from './pages/HomePage';
import HomeLayout from './pages/HomeLayout';
import ProductDetailPage from './pages/ProductDetailPage'
import Cart from './pages/cartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductListpage from './component/ProductListPage/index';
import AdminLoginPage from './AdminComponent/Auth/AdminLoginPage';
import AdminDashBoard from './AdminComponent/AdminDashBoard/AdminDashBoard';
import OrderHistory from './component/orderHistory/index';
import DashBoarPage from './pages/Admin/Dashboard/index';
function App() {
  return (
    <>
      {/* <createBrowserRouter>
    <RouterProvider router={router} >
     <AuthProvider >
        <CartProvider>

        </CartProvider>
      </AuthProvider>
     </RouterProvider>
    </createBrowserRouter> */}
      <AuthProvider >
        <CartProvider>
          <Routes>
            <Route exact element={<HomeLayout />}>
              <Route exact
                path="/"
                element={<HomePage />}
              />
              <Route exact
                path="/detailpage/:productid"
                element={<ProductDetailPage />}
              />
              <Route exact
                path="/cart"
                element={<Cart />}
              />
              <Route exact
                path="/orderhistory"
                element={<OrderHistory />}
              />
              <Route exact
                path="/checkout"
                element={<CheckoutPage />}
              />
              <Route exact
                path="/list/:type"
                element={<ProductListpage />}
              />
            </Route>
            <Route exact
                path="/adminlogin"
                element={<AdminLoginPage />}
              />
            <Route exact element={<AdminDashBoard />}>
              <Route exact
                path="/admindashboard"
                element={<AdminDashBoard />}
              />
            </Route>

          </Routes>
        </CartProvider>
      </AuthProvider>




    </>
  );
}

export default App;
