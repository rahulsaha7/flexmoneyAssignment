import {
  Button,
  FormControl,
  TextField,
  CardContent,
  Typography,
} from "@material-ui/core";

const Payment = ({
  values,
  batches,
  handleChange,
  res,
  handleRegSubmitreg,
}) => {
  return (
    <>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          color="green"
        >
          Hey! Either you haven't completed the payment or your subscription is
          over
        </Typography>
      </CardContent>
      <form action="" method="post" onSubmit={(e) => handleRegSubmitreg(e)}>
        <FormControl className="formInputHolders">
          <TextField
            id="filled-select-currency-native"
            select
            label="Batches"
            value={values.batch}
            onChange={handleChange("batch")}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="filled"
            required
          >
            {batches.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </FormControl>

        <FormControl>
          <TextField
            disabled
            id="filled-disabled"
            label="Amount"
            defaultValue={values.amount}
            variant="filled"
          />
        </FormControl>

        <FormControl className="formInputHolders">
          <TextField
            id="filled-select-currency-native"
            type="email"
            label="email"
            value={values.email}
            onChange={handleChange("email")}
            SelectProps={{
              native: true,
            }}
            helperText="Please provide email"
            variant="filled"
            required
          ></TextField>
        </FormControl>

        <FormControl className="formInputHolders">
          <TextField
            id="filled-select-currency-native"
            type="text"
            label="Phone"
            value={values.phone}
            onChange={handleChange("phone")}
            SelectProps={{
              native: true,
            }}
            helperText="Please Provide Number"
            variant="filled"
            required
          ></TextField>
        </FormControl>

        <FormControl className="formInputHolders">
          <Button type="submit" variant="outlined" color="primary">
            Pay
          </Button>
        </FormControl>
      </form>

      <span style={{ display: res.resDisplay, color: "red" }}>
        {res.resMessage}
      </span>
    </>
  );
};

export default Payment;
