import React, { useState } from "react";
import "./Login.css";
import { getApiData } from "../API/Api.js";

import {
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Card,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Login = ({ navigate, setcookies }) => {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const [res, setres] = useState({
    resDisplay: "none",
    resMessage: "",
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();

    const params = {
      email: values.email,

      password: values.password,
    };

    getApiData(params, "login")
      .then((output) => {
        console.log(output);
        if (output.token) {
          setcookies("authToken", output.token, { path: "/" });
          navigate("/home");
        } else if (!output.login) {
          setres({ resDisplay: "inline-block", resMessage: output.message });
        }
      })
      .catch((err) => {
        setres({
          resDisplay: "inline-block",
          resMessage: "something went wrong",
        });
      });
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">L</Avatar>}
          title="Login"
        />
        <form
          action=""
          method="post"
          onSubmit={(e) => {
            handleRegSubmit(e);
          }}
        >
          <FormControl className="formInputHolders">
            <InputLabel htmlFor="standard-adornment-email">username</InputLabel>
            <OutlinedInput
              id="standard-adornment-phone"
              type="email"
              value={values.email}
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter valid email");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
              autoComplete="on"
            />
          </FormControl>

          <FormControl className="formInputHolders">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={80}
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter password");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
              autoComplete="off"
            />
          </FormControl>
          <FormControl className="formInputHolders">
            <Button type="submit" variant="outlined" color="primary">
              Login
            </Button>
          </FormControl>
        </form>

        <span style={{ display: res.resDisplay, color: "red" }}>
          {res.resMessage}
        </span>
      </Card>
    </>
  );
};

export default Login;
