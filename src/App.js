import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <Router>
      <div className=" max-w-[1440px] m-auto">
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
