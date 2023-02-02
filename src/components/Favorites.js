import React from 'react';
import { useProductContext } from '../providers/Context';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Container, Box, Image, Title, Price, Button,FavoriteBox,EmptyFavorite } from "../styled";
import { NavLink} from "react-router-dom";
import Footer from './Footer';
export default function Favorites() {
  const { favorite, addToCart, navigateBack,removeFavorites } = useProductContext()

  return (
    <div>
    <FavoriteBox>
    <ArrowBackIcon onClick={navigateBack} />
    <h4>Favorite products</h4>
    </FavoriteBox>
      <Container style={{ paddingTop: "20px" }}>
        {favorite.length>0 ? favorite.map(items => {
          return <Box key={items.id} id={items.id}>
            <CloseIcon
              style={{
                position: "absolute",
                top: "4",
                right: "4",
                color: " rgb(140, 0, 255)"
              }}
              onClick={()=>removeFavorites(items)}
              id={items.id} />
            <NavLink
              key={items.id}
              style={{ textDecoration: "none" }}
              to={`/etraflı/${items.id}`}>
              <Image src={items.img}></Image>
              <Title>{items.title}</Title>
              <Price>{items.price} <AttachMoneyIcon/></Price>
            </NavLink>
            <Button onClick={() => addToCart(items)}>
              <ShoppingCartIcon style={{ fontSize: "14px" }} />
              Add to cart
            </Button>
          </Box>
        }) :<EmptyFavorite>
           <HeartBrokenIcon className='empty'/>
           <h4>Your favorite list is empty</h4>
        </EmptyFavorite>  }
      </Container>
      <Footer/>
    </div>
  )
};
