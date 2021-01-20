import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { weatherApi } from "../../utility/API";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
  },
  loader: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});

const CapitalWeather = ({ capital }) => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const classes = useStyles();

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capital]);

  const getWeatherData = async () => {
    try {
      setLoading(true);
      const result = await weatherApi.get(
        `/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${capital}`
      );
      setWeather(result.data);
      // console.log(result.data);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={classes.root}>
      {!loading && weather?.current ? (
        <CardContent>
          <Typography variant="h4">{capital}</Typography>
          <Avatar
            variant="rounded"
            className={classes.rounded}
            src={weather.current.weather_icons[0]}
          />
          <Typography variant="body1" color="textSecondary">
            Temperature : {weather.current.temperature + "°"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Wind Speed : {weather.current.wind_speed} km/h
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Precipitation : {weather.current.precip} %
          </Typography>
        </CardContent>
      ) : (
        <CardContent className={classes.loader}>
          <CircularProgress size={30} />
        </CardContent>
      )}
    </Card>
  );
};

export default CapitalWeather;
