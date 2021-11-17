import React, { useState } from "react";
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
import { getApiData } from "../API/Api.js";

const Register = ({ navigate, setcookies }) => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    showPassword: false,
  });

  const [res, setres] = useState({
    resDisplay: "none",
    resMessage: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegSubmitreg = (e) => {
    e.preventDefault();

    const params = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      age: values.age,
      address: values.address,
    };

    getApiData(params, "signup")
      .then((output) => {
        if (output.token) {
          setcookies("authToken", output.token, { path: "/" });
          navigate("/home");
        } else if (!output.data) {
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
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title="Registration"
        />
        <form
          action=""
          method="post"
          onSubmit={(e) => {
            handleRegSubmitreg(e);
          }}
        >
          <FormControl className="formInputHolders">
            <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="standard-adornment-name"
              type="text"
              value={values.name}
              pattern="^[a-zA-Z\s]*$"
              onChange={handleChange("name")}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter your name");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
            />
          </FormControl>

          <FormControl className="formInputHolders">
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
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
            />
          </FormControl>
          <FormControl className="formInputHolders">
            <InputLabel htmlFor="standard-adornment-phone">Phone</InputLabel>
            <OutlinedInput
              id="standard-adornment-phone"
              type="text"
              value={values.phone}
              onChange={handleChange("phone")}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter valid phone no");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
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
            />
          </FormControl>
          <FormControl className="formInputHolders">
            <InputLabel htmlFor="standard-adornment-age">Age</InputLabel>
            <OutlinedInput
              id="standard-adornment-age"
              type="number"
              value={values.age}
              onChange={handleChange("age")}
              required
              min="18"
              max="65"
              onInvalid={(e) => {
                e.target.setCustomValidity("Age should be in range of 18-85");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
            />
          </FormControl>
          <FormControl className="formInputHolders">
            <InputLabel htmlFor="standard-adornment-address">
              Address
            </InputLabel>
            <OutlinedInput
              id="standard-adornment-address"
              type="text"
              value={values.adress}
              onChange={handleChange("address")}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Please Enter address");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
            />
          </FormControl>
          <FormControl className="formInputHolders">
            <Button type="submit" variant="outlined" color="primary">
              Register
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

export default Register;
