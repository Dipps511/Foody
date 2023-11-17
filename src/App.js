import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductManage from "./pages/dashboard/ProductManage";
import Products from "./components/products/Products";
import ProductDashboard from "./pages/dashboard/ProductDashboard";
import AddProduct from "./pages/dashboard/AddProduct";
import EditProduct from "./pages/dashboard/EditProduct";

function App() {
  return (
<<<<<<< HEAD
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<h2>Dashboard</h2>} />
          <Route path="product" element={<ProductManage />}>
            <Route index element={<ProductDashboard />} />
            <Route path="new" element={<AddProduct />} />
            <Route path=":id" element={<EditProduct />} />
          </Route>
          <Route path="settings" element={<h2>settings</h2>} />
          <Route path="logout" element={<h2>logout</h2>} />
        </Route>
      </Routes>
=======
    <div>
     <h1>Food Ordering - Foody App check deploymentnnn</h1>
>>>>>>> 69ecd4bafff2ac8c95144aa6eccf7de9c995aee1
    </div>
  );
}

export default App;
