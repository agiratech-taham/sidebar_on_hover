import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/comment" element={<Comment />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    );
  }
}

export default App;
