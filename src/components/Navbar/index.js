import {
  AppBar,
  colors,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    margin: "0 auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color={colors.blue[200]}>
          Country and Weather Info
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
