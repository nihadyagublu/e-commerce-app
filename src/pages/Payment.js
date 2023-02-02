import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { PaymentBox } from "../styled";
export default function Payment() {
  return (
    <div className="payment">
      <PaymentBox>
        <h2>Payment</h2>
        <TextField id="standard-basic" label="Cart name" variant="standard" />
        <TextField id="standard-basic" label="Cart number" variant="standard" />
        <TextField
          id="standard-basic"
          label="Expirition date"
          variant="standard"
        />
        <TextField id="standard-basic" label="Cvc" variant="standard" />
        <Button variant="contained" color="success">
          Pay
        </Button>
      </PaymentBox>
    </div>
  );
}
