import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../db/Products.json";
export const ProductContext = createContext();

const ProductNames = ({ children }) => {
  const [item, setItem] = useState(Products);
  const [filteredItems, setFilteredItems] = useState(Products);
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(false);
  const [profile, setProfile] = useState(false);
  const [theme, setTheme] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  const category = [
    {
      title: "All",
      id: 0,
    },
    {
      title: "Smartphones",
      id: 1,
    },
    {
      title: "Notebooks",
      id: 2,
    },
    {
      title: "Accessories",
      id: 3,
    },
  ];
  const filters = [
    {
      title: "Price low to high",
      value: 0,
    },
    {
      title: "Price high to low",
      value: 1,
    },
    {
      title: "Alphabetic",
      value: 2,
    },
  ];

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  const decrement = (items) => {
    const item = cart.find((card) => card.id === items.id);
    if (item.qty > 1) {
      setCart(
        cart.map((item) =>
          item.id === items.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };
  const increment = (items) => {
    setCart(
      cart.map((item) =>
        item.id === items.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const removeToCart = (carts) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== carts.id);
    const removeitem = cart.find((cartItem) => cartItem.id === carts.id);
    if (removeitem.qty > 1) {
      setCart(
        cart.map((item) =>
          item.id === carts.id
            ? { ...removeitem, qty: removeitem.qty - 1 }
            : item
        )
      );
    } else {
      setCart(newCart);
    }
  };
  const addFavorite = (items) => {
    const favoriteItem = item.find((itemFav) => itemFav.id === items.id);
    const repeatItem = favorite.find((fav) => fav.id === items.id);
    if (repeatItem === favoriteItem) {
    } else {
      setFavorite([...favorite, favoriteItem]);
    }
  };
  const removeFavorites = (items) => {
    const newFavorite = favorite.filter((item) => item.id !== items.id);
    setFavorite(newFavorite);
  };
  return (
    <ProductContext.Provider
      value={{
        item,
        decrement,
        increment,
        setItem,
        addFavorite,
        removeToCart,
        category,
        filters,
        filteredItems,
        setFilteredItems,
        addToCart,
        cart,
        showCart,
        setshowCart,
        setProfile,
        profile,
        setTheme,
        theme,
        favorite,
        navigateBack,
        removeFavorites,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  const contextValue = useContext(ProductContext);
  return contextValue;
};

export default ProductNames;
