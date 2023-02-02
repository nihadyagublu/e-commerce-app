import { useMemo} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../providers/Context";
import { Detail, Images, Info, FavoriteBox,ProductPrice, BuyButton,IncrementButtons,ColorPicker,ColorBox} from "../styled";
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from "../components/Footer";
export default function BuyProduct() {
  const { cart, navigateBack,increment,decrement} = useProductContext();
  const { id } = useParams();
  const items = useMemo(() => {
    return cart.find((product) => String(product.id) === id);
  }, [id, cart]);
const colors=items.colors
  return (
    <div>
      <div>
        <FavoriteBox>
          <ArrowBackIcon onClick={navigateBack} />
          <h4>Buy Product</h4>
        </FavoriteBox>
      </div>
      <Detail>
        <Images>
          <img alt="" src={items.img} style={{ width: "60%" }}></img>
        </Images>
        <Info>
          <h2>{items.title}</h2>
          <ProductPrice>{items.price} <AttachMoneyIcon fontSize="small"/></ProductPrice>
          <div style={{display:"flex",gap:"30px"}}>
          <h3>Amount: {items.qty}</h3>
              </div>
              <IncrementButtons>
                <AddIcon onClick={() => increment(items)} />
                <RemoveIcon onClick={() => decrement(items)} />
                </IncrementButtons>
          <h3>Total: {items.qty*items.price}</h3>
          <ColorBox>
          Colors:
          {colors.map(color=>{
              return  <ColorPicker style={{background:color}}/>
          })}
          </ColorBox>
         <NavLink to="/payment">
         <BuyButton >Buy Product</BuyButton>
         </NavLink>
        </Info>
      </Detail>
      <Footer/>
    </div>
  );
}
