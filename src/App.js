import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <div className=" max-w-[1440px] m-auto">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
