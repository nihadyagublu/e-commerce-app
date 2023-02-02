import { useState, useMemo, useRef } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useProductContext } from "../providers/Context";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import { Link, useLocation } from "react-router-dom";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import {
  Headers,
  HeadContainer,
  SearchBox,
  Input,
  CartCount,
  Cart,
  IconBox,
} from "../styled";
export default function Header() {
  const { item, setItem, cart, setshowCart, setProfile, setTheme, theme } =
    useProductContext();
  const [defaults, setDefaults] = useState(item);

  const location = useLocation();
  const cartLength = useMemo(() => {
    return cart.reduce((acc, curr) => {
      return acc + curr.qty;
    }, 0);
  }, [cart]);

  const value = useRef();
  const writeConsol = () => {
    if (value.current.value.trim() === "") {
      setItem(defaults);
    } else {
      setItem(
        item.filter((items) =>
          items.title.toLowerCase().includes(value.current.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <Headers>
        <HeadContainer>
          <TuneOutlinedIcon
            fontSize="medium"
            style={{ color: "white" }}
            onClick={() => {
              if (theme === false) {
                setTheme(true);
              } else {
                setTheme(false);
              }
            }}
          />
          <h2 style={{ color: "white", fontStyle: "italic" }}>
            N.Y. Technology
          </h2>
          <SearchBox id="search">
            <Input
              ref={value}
              onChange={writeConsol}
              placeholder="Search product"
            />
          </SearchBox>
          <IconBox>
            <Cart
              onClick={() => {
                setshowCart(true);
              }}
            >
              {cartLength === 0 ? null : <CartCount>{cartLength}</CartCount>}
              <ShoppingCartOutlinedIcon
                fontSize="large"
                style={{ color: "white" }}
              />
            </Cart>
          </IconBox>
        </HeadContainer>
      </Headers>
    </div>
  );
}
