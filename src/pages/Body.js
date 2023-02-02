import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Category from "../components/Category";
import { useProductContext } from "../providers/Context";
import CartContainer from "../components/Cart";
import BottomMenu from "../components/BottomMenu";
import Login from "./Login";
import Slide from "../components/Slide";
import Testimionals from "../components/Testimional";
import Footer from "../components/Footer";
export default function Body() {
  const { showCart } = useProductContext();
  return (
    <div>
      <Header />
      <BottomMenu />
      {showCart === false ? null : <CartContainer />}
      <Category />
      <Products />
      <Footer />
    </div>
  );
}
