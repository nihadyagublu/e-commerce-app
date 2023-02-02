import { useProductContext } from "../providers/Context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Container, Box, Image, Title, Price, Button } from "../styled";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Testimionals from "./Testimional";

export default function Products() {
  const { item, addToCart, addFavorite } = useProductContext();
  return (
    <div>
      <Container>
        {item.map((items) => {
          return (
            <Box key={items.id} id={items.id}>
              <FavoriteBorderIcon
                style={{
                  position: "absolute",
                  top: "4",
                  right: "4",
                  color: " rgb(140, 0, 255)",
                }}
                onClick={(e) => {
                  addFavorite(items);
                  e.target.style.color = "red";
                }}
                id={items.id}
              />
              <NavLink
                key={items.id}
                style={{ textDecoration: "none" }}
                to={`/detailed/${items.id}`}
              >
                <Image src={items.img}></Image>
                <Title>{items.title}</Title>
                <Price>
                  {items.price}
                  <AttachMoneyIcon />
                </Price>
              </NavLink>
              <Button onClick={() => addToCart(items)}>
                <ShoppingCartIcon style={{ fontSize: "14px" }} />
                Add to cart
              </Button>
            </Box>
          );
        })}
      </Container>
      <Testimionals />
    </div>
  );
}
