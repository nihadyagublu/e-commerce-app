import { useMemo, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useParams } from "react-router-dom";
import { useProductContext } from "../providers/Context";
import {
  Detail,
  Images,
  Info,
  FavoriteBox,
  Details,
  ProductPrice,
  BuyButton,
  AboutProduct,
} from "../styled";
import Footer from "../components/Footer";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
export default function SingleProduct() {
  const { item, navigateBack, addToCart } = useProductContext();
  const { id } = useParams();
  const [detail, setDetail] = useState(false);
  const items = useMemo(() => {
    return item.find((product) => String(product.id) === id);
  }, [id, item]);
  const img = items.img;
  return (
    <div>
      <div>
        <FavoriteBox>
          <ArrowBackIcon onClick={navigateBack} />
          <h4>Product Detail</h4>
        </FavoriteBox>
      </div>
      <Detail>
        <Images>
          <img src={items.img} style={{ width: "50%" }}></img>
        </Images>
        <Info>
          <h2>{items.title}</h2>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={5.5}
              precision={5}
              readOnly
            />
          </Stack>
          <ProductPrice>
            {items.price} <AttachMoneyIcon fontSize="small" />
          </ProductPrice>
          <h4 style={{ color: items.stock > 0 ? "green" : "red" }}>
            {items.stock > 0 ? "In stock:" : "Not available:"} {items.stock}
          </h4>
          <Details
            onClick={() => {
              setDetail(detail === false ? true : false);
            }}
          >
            <h4>About product</h4>
          </Details>
          <AboutProduct>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            ex quis magna tincidunt tincidunt eget vel purus. Curabitur tempor
            tincidunt ligula eget sollicitudin. Fusce non lacus at enim aliquet
            hendrerit sit amet at nunc. Fusce bibendum viverra leo. In et felis
            sagittis, vestibulum ex id, ullamcorper lorem. Suspendisse sit amet
            turpis nisl. Aenean nec tempor sapien. Aenean sit amet leo commodo
            arcu aliquet bibendum. Vivamus id quam tellus. Mauris vulputate,
            eros a fermentum lacinia, sem dolor dignissim lectus, in accumsan
            tortor felis tincidunt dui. Mauris euismod semper odio, et eleifend
            purus auctor eget. Maecenas fermentum tortor vel odio ornare
            bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ullamcorper rutrum hendrerit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Quisque
            nec viverra sem. Phasellus lobortis nibh risus, nec sagittis tellus
            pulvinar ac.{" "}
          </AboutProduct>
          <BuyButton onClick={() => addToCart(items)}>Add to cart</BuyButton>
        </Info>
      </Detail>
      <Footer />
    </div>
  );
}
