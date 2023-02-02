import React, { useState } from "react";
import { useProductContext } from "../providers/Context";
import { AccountBox, TabHeader, UserInfo, FavoriteBox } from "../styled";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Account() {
  const [toggle, setToggle] = useState(1);
  const { tabs, navigateBack } = useProductContext();
  const navigate = useNavigate();
  const ChangeToggle = (index) => {
    setToggle(index);
  };
  return (
    <AccountBox>
      <FavoriteBox>
        <ArrowBackIcon onClick={navigateBack} />
        <h4>Your profile</h4>
      </FavoriteBox>
      <UserInfo>
        <Avatar style={{ width: "70px", height: "70px" }} />
        <h3>Name Surname</h3>
      </UserInfo>
      <TabHeader>
        <div
          value="1"
          onClick={() => ChangeToggle(1)}
          className={toggle === 1 ? "active-tab" : "tab"}
        >
          Profile
        </div>
        <div
          onClick={() => ChangeToggle(2)}
          className={toggle === 2 ? "active-tab" : "tab"}
        >
          Address
        </div>
        <div
          onClick={() => ChangeToggle(3)}
          className={toggle === 3 ? "active-tab" : "tab"}
        >
          Orders
        </div>
      </TabHeader>
      <div className={toggle === 1 ? "editpage" : "hidecontent"}>
        <TextField id="outlined-basic" label="Firstname" size="small" />
        <TextField id="outlined-basic" label="Lastname" size="small" />
        <TextField id="outlined-basic" label="Email" size="small" />
        <TextField id="outlined-basic" label="Number" size="small" />
        <Button variant="contained" color="success" style={{ width: "150px" }}>
          Save
        </Button>
      </div>
      <div className={toggle === 2 ? "editpage" : "hidecontent"}>
        <TextField id="outlined-basic" label="Adress 1" size="small" />
        <TextField id="outlined-basic" label="City" size="small" />
        <TextField id="outlined-basic" label="Street" size="small" />
        <TextField id="outlined-basic" label="Zip code" size="small" />
        <Button variant="contained" color="success" style={{ width: "150px" }}>
          Save
        </Button>
      </div>
    </AccountBox>
  );
}

export default Account;
