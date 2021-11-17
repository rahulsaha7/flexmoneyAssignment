import React from "react";
import { Card, CardHeader, Avatar, Typography } from "@material-ui/core";

import Payment from "../Payment/Payment";
import { getApiData } from "../API/Api.js";

const batches = [
  {
    value: "1",
    label: "6-7am",
  },
  {
    value: "2",
    label: "7-8am",
  },
  {
    value: "3",
    label: "8-9am",
  },
  {
    value: "4",
    label: "5-6pm",
  },
];

const Home = ({ payment, month, pChange, setpChange, cookies }) => {
  const [values, setvalues] = React.useState({
    batch: "1",
    email: "",
    phone: "",
    amount: "500",
  });

  const [res, setres] = React.useState({
    resDisplay: "none",
    resMessage: "",
  });

  const handleChange = (prop) => (event) => {
    setvalues({ ...values, [prop]: event.target.value });
  };

  const [Nmonth, setNmonth] = React.useState("");

  const handleRegSubmitreg = (e) => {
    e.preventDefault();

    const params = {
      batch: values.batch,
      email: values.email,
      phone: values.phone,
      amount: values.amount,
      session_id: cookies.authToken.SessionId,
      userid: cookies.authToken.userId,
    };

    getApiData(params, "payment")
      .then((output) => {
        if (output.data) {
          alert(output.message);
          pChange ? setpChange(false) : setpChange(true);
        } else if (!output.data) {
          setres({ resDisplay: "inline-block", resMessage: output.message });
        }
      })
      .catch((err) => {
        alert(err.message);
        setres({
          resDisplay: "inline-block",
          resMessage: "something went wrong",
        });
      });
  };

  const setMonth = () => {
    var Xmas95 = new Date();
    let monthN = Xmas95.getMonth() + 1;
    setNmonth(monthN);
  };

  React.useEffect(() => {
    setMonth();
  }, [Nmonth]);

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">S</Avatar>}
          title="Subscription"
        />
        {!payment || month < Nmonth ? (
          <Payment
            values={values}
            batches={batches}
            handleChange={handleChange}
            res={res}
            handleRegSubmitreg={handleRegSubmitreg}
          />
        ) : (
          <Typography variant="h5"> Hey! Welcome Again</Typography>
        )}
      </Card>
    </>
  );
};

export default Home;
