import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { context } from "../../App";
// import Header from '../../components/header/Header';

function SigninForm() {
  // const { setflag } = useContext(context);
  const navigate = useNavigate();
  const [userName, getUserName] = useState(false);

  const submitForm = () => {
    localStorage.setItem("flag", true);
    navigate(`/itemlist`);
  };

  return (
    <>
      <div className="signin">
        <h1>SIGN IN</h1>
        <div className="name">
          <TextField
            onChange={(e) => getUserName(e.target.value)}
            id="outlined-basic"
            label="Enter name"
            variant="outlined"
          />
        </div>
        <div class="pwd">
          <TextField
            id="outlined-basic"
            label="Enter password"
            variant="outlined"
          />
        </div>
        <Button variant="contained" onClick={submitForm}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default SigninForm;
