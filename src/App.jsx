import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import CreateStore from "./pages/CreateStore.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <div data-theme="light">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/createstore" element={<CreateStore />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
