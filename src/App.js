import React, { useState, useEffect } from "react";

//Importing all the necessary components
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "./Common.css";
import { getApiData } from "./components/API/Api.js";
import { useCookies } from "react-cookie";

//Header Component
import Header from "./components/Header/Header";
import Header2 from "./components/Header/Header2";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import BannerCom from "./components/Banner/Banner";
import Error from "./components/Error/Error";

//Material ui items
import { Grid, Paper } from "@material-ui/core";

function App() {
  const [authDetails, setauthDetails] = useState({
    auth: false,
    payment: true,
    month: "",
    username: "",
  });
  const [cookies, setcookies, removecookies] = useCookies(["authToken"]);
  const [pChange, setpChange] = useCookies(false);
  const navigate = useNavigate();

  const CheckIfLoggedin = () => {
    if (cookies.authToken) {
      try {
        const params = {
          session_id: cookies.authToken.SessionId,

          userid: cookies.authToken.userId,
        };

        getApiData(params, "auth-cred").then((output) => {
          if (output.data) {
            setauthDetails({
              auth: true,
              payment: output.payment,
              month: output.month,
            });
          }
        });
      } catch (err) {
        setauthDetails({
          auth: false,
          payment: false,
          month: "",
        });
      }
    } else {
      setauthDetails({
        auth: false,
        payment: false,
        month: "",
      });
    }
  };

  useEffect(() => {
    CheckIfLoggedin();
  }, [navigate, pChange]);

  return (
    <>
      <main>
        <Grid container>
          <Grid className="header" item xs={12}>
            {/* Container for header panel */}
            <Paper>
              {/* Header Component */}
              {authDetails.auth ? (
                <Header2 removecookies={removecookies} />
              ) : (
                <Header />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {/* Banner for yoga page */}
            <BannerCom />
          </Grid>
          <Grid item xs={12}>
            <Paper>
              {/* When Login button will be clicked the login module will appear and by default login module will be shown */}

              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    !authDetails.auth ? (
                      <Navigate to="/login" />
                    ) : (
                      <Navigate to="/home" />
                    )
                  }
                />

                <Route
                  exact
                  path="/register"
                  element={
                    !authDetails.auth ? (
                      <Register navigate={navigate} setcookies={setcookies} />
                    ) : (
                      <Navigate to="/home" />
                    )
                  }
                />
                <Route
                  exact
                  path="/login"
                  element={
                    !authDetails.auth ? (
                      <Login navigate={navigate} setcookies={setcookies} />
                    ) : (
                      <Navigate to="/home" />
                    )
                  }
                />
                <Route
                  exact
                  path="/home"
                  element={
                    cookies.authToken && authDetails.auth ? (
                      <Home
                        payment={authDetails.payment}
                        month={authDetails.month}
                        cookies={cookies}
                        pChange={pChange}
                        setpChange={setpChange}
                      />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />

                <Route exact path="*" element={<Error />} />
              </Routes>

              {/* When Register button will be clicked, register module will be shown */}
            </Paper>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default App;
