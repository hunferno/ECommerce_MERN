import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import Register from "./pages/Register";

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {(!user && <Route path="/login" element={<Login />} />) ||
          (user && <Route path="/login" element={<Navigate to="/" />} />)}
        {(!user && <Route path="/register" element={<Register />} />) ||
          (user && <Route path="/register" element={<Navigate to="/" />} />)}
      </Routes>
    </Router>
  );
};

export default App;
