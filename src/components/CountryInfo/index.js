import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CapitalWeather from "../CapitalWeather";

const useStyles = makeStyles({
  container: {
    marginTop: 30,
  },
  root: {
    maxWidth: 345,
  },
});

const CountryInfo = () => {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);
  const [weatherCountry, setWeatherCountry] = useState("");

  useEffect(() => {
    const countries = localStorage.getItem("countries");
    const parsedCountries = JSON.parse(countries);
    if (parsedCountries) {
      setCountries(parsedCountries);
      console.log(parsedCountries);
    } else {
      setCountries([]);
    }
  }, []);

  return (
    <Container className={classes.container}>
      <Grid container justify="center" spacing={2}>
        {countries.map((country) => (
          <Grid key={country.numericCode} item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={country.flag}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {country.name}
                    <Typography
                      variant="subtitle1"
                      component="p"
                      color="textSecondary"
                    >
                      {country.capital}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Population - {country.population}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Latitude, Longitude :{" "}
                    {country.latlng[0] + "°  " + country.latlng[1] + "°"}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => setWeatherCountry(country.capital)}
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  Capital Weather
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {weatherCountry && <CapitalWeather capital={weatherCountry} />}
    </Container>
  );
};

export default CountryInfo;
