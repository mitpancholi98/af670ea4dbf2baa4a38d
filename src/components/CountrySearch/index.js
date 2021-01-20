import {
  Button,
  CircularProgress,
  colors,
  Container,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import { countryApi } from "../../utility/API";

const useStyles = makeStyles({
  container: {
    marginTop: 30,
  },
  button: {
    marginTop: 15,
  },
});

const CountrySearch = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const classes = useStyles();

  const handleCountrySearch = async () => {
    try {
      setLoading(true);
      const result = await countryApi.get(`/${searchInput}`);
      if (result.data) {
        const stringifiedCountry = JSON.stringify(result.data);
        localStorage.setItem("countries", stringifiedCountry);
        history.push("/country");
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
      setSearchInput("");
    }
  };
  return (
    <Container className={classes.container}>
      <TextField
        size="small"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        fullWidth
        id="countryName"
        label="Enter Country"
        variant="outlined"
      />
      <Button
        className={classes.button}
        onClick={handleCountrySearch}
        disabled={searchInput === ""}
        variant="contained"
        color="primary"
        startIcon={
          loading && <CircularProgress size={20} color={colors.blue[200]} />
        }
      >
        Submit
      </Button>
    </Container>
  );
};

export default CountrySearch;
