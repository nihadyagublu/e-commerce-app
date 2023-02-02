import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding-top: 115px;
  padding-bottom: 100px;
  @media screen and (max-width: 279px) {
    padding-top: 140px;
  }
`;
const Box = styled.div`
  flex-basis: 20%;
  height: 220px;
  border: 2px solid #e7ebee;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  gap: 5px;
  padding-top: 5px;
  margin-top: 15px;
  @media screen and (max-width: 319px) {
    flex-basis: 90%;
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-left: 25px;
`;
const Title = styled.h4`
  height: 18px;
  width: 140px;
  padding-bottom: 15px;
  overflow: hidden;
  margin: 0 5px 0 5px;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
`;
const Price = styled.p`
  color: black;
  font-weight: bolder;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  cursor: pointer;
  background: rgb(153, 76, 0);
  color: white;
  border: none;
  width: 100%;
  height: 80px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  margin-top: -14px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 7px;
`;
const Headers = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(153, 76, 0);
  z-index: 10000;
  @media screen and (max-width: 460px) {
    padding-bottom: 15px;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  box-sizing: border-box;
  gap: 10px;
  height: 100%;
`;
const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 1px solid white;
  padding-left: 15px;
  z-index: 10000;
  background: white;
  border-radius: 15px;
  outline: 1px blue;
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 460px) {
    padding-bottom: 5px !important;
    background: rgb(153, 76, 0);
  }
`;
const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  @media screen and (max-width: 660px) {
    flex-direction: column;
    padding-bottom: 15px;
  }
`;
const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  flex-basis: 50%;
  height: 30%;
  @media screen and (max-width: 660px) {
    padding-top: 20px;
    padding-bottom: 15px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  padding-top: 60px;
  @media screen and (max-width: 660px) {
    border-top: 1px solid black;
    padding-left: 10px;
    padding-top: 0;
    flex-basis: 100%;
  }
`;
const Categorys = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 60px;
  background: rgb(153, 76, 0);
  width: 0px;
  overflow: hidden;
  margin: 0;
  overflow: hidden;
  gap: 10px;
  z-index: 10000;
  @media screen and (max-width: 461px) {
    top: 60px;
  }
  @media screen and (max-width: 279px) {
    overflow-x: scroll;
    justify-content: flex-start;
    padding-left: 5px;
  }
`;
const Select = styled.select`
  padding: 5px;
  outline: none;
  border: 1px solid rgb(40, 40, 117);
  color: black;
  border-radius: 5px;
  background: white;
`;
const Selects = styled.select`
  padding: 5px;
  outline: none;
  border: 1px solid rgb(40, 40, 117);
  color: black;
  border-radius: 5px;
  background: white;
`;
const Cart = styled.div`
  position: relative;
`;
const CartCount = styled.span`
  cursor: pointer;
  user-select: none;
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
`;
const Carts = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  padding-bottom: 40px;
`;
const CartItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid black;
  @media screen and (max-width: 319px) {
    overflow-x: scroll;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
  }
`;
const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px !important;
  gap: 20px;
`;
const CartTitle = styled.div`
  width: 100px;
  height: 20px;
  overflow: hidden;
  margin: 0 5px 0 5px;
  padding: 20px;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;
const CartContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  height: 100%;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  background: white;
  border-right: 1px solid white;
  @media screen and (max-width: 419px) {
    width: 100%;
  }
`;
const CartImg = styled.img`
  width: 50px;
  height: 50px;
  padding-left: 5px;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const CartHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: rgb(153, 76, 0);
  color: white;
  height: 60px;
  border-right: 1px solid white;
`;
const AccountBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  background: white;
`;
const TabHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  overflow-x: scroll;
  border-top: 1px solid black;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 150px;
  padding-left: 20px;
  position: relative;
  gap: 30px;
`;
const FavoriteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  gap: 10px;
  height: 60px;
  margin: 0;
  background: rgb(153, 76, 0);
  color: white;
`;
const CartButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 60px;
  justify-content: center;
  gap: 10px;
  background: rgb(153, 76, 0);
  border-radius: 5px;
  color: white;
  align-items: center;
`;
const IncrementButtons = styled.div`
  display: flex;
  width: 100px;
  height: 30px;
  justify-content: center;
  gap: 10px;
  background: rgb(153, 76, 0);
  border-radius: 5px;
  color: white;
  align-items: center;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ProductPrice = styled.h4`
  width: 100px;
  height: 20px;
  background: rgb(153, 76, 0);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;
const BuyButton = styled.button`
  width: 50%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgb(241, 113, 8);
  padding: 5px;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
`;
const AboutProduct = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 20px;
`;
const ColorPicker = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: none;
`;
const ColorBox = styled.div`
  display: flex;
  gap: 10px;
`;
const EmptyFavorite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;
const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`;
const Footers = styled.div`
width:100%;
background:rgb(153, 76, 0);
display:flex;
align:items:center;
padding-bottom:100px;
margin-top:50px;
justify-content:flex-start;
gap:50px;
padding-left:20px;
padding-top:30px;
flex-wrap:wrap;
@media screen and (max-width:365px){
  flex-direction:column;
}
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  gap: 10px;
  margin: 10px;
`;
const Testimional = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 100px;
  @media screen and (max-width: 527px) {
    padding-bottom: 300px;
  }
`;
const Services = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  background: rgb(153, 76, 0);
  border-radius: 15px;
`;
const TotalDiv = styled.div`
  width: 100%;
  height: 40px;
  color: white;
  background: rgb(153, 76, 0);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  box-sizing: border-box;
`;
export {
  LoginBox,
  Services,
  TotalDiv,
  IncrementButtons,
  Testimional,
  Footers,
  FooterDiv,
  PaymentBox,
  Item,
  Details,
  AboutProduct,
  EmptyFavorite,
  ColorBox,
  ColorPicker,
  AccountBox,
  BuyButton,
  ProductPrice,
  CartButtons,
  FavoriteBox,
  UserInfo,
  TabHeader,
  IconBox,
  CartHead,
  Carts,
  Cart,
  CartCount,
  CartContainer,
  Container,
  Button,
  Box,
  Image,
  Title,
  Price,
  Headers,
  SearchBox,
  Input,
  HeadContainer,
  Detail,
  Images,
  Info,
  Categorys,
  Select,
  Selects,
  CartItem,
  CartInfo,
  CartTitle,
  CartImg,
};
