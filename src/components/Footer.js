import React from "react";
import { Footers, FooterDiv, Item } from "../styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Footer() {
  return (
    <div>
      <Footers>
        <FooterDiv>
          <Item>
            <LocalPhoneIcon /> Telephone: +994 558 78 78 987
          </Item>
          <Item>
            <EmailIcon />
            E-mail: support@nyinnovations.com{" "}
          </Item>
          <Item>
            <LocationOnIcon /> 5th Street, Baku
          </Item>
        </FooterDiv>

        <FooterDiv>
          <Item>
            <FacebookIcon style={{ color: "white" }} />
            Facebook
          </Item>
          <Item>
            <TwitterIcon style={{ color: "white" }} />
            Twitter
          </Item>
          <Item>
            <InstagramIcon style={{ color: "white" }} />
            Instagram
          </Item>
        </FooterDiv>
        <FooterDiv>
          <img style={{ width: "70%" }} src="/icons/visa.png"></img>
        </FooterDiv>
      </Footers>
    </div>
  );
}
