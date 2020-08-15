import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import "./styles.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const { classes } = props;
  const users = useSelector((state) => state.token.users);

  return (
    <div>
      <AppBar position="static" className={classes.test}>
        <Toolbar className={classes.test2}>
          <Typography>
            <Link className={classes.link} to="/">
              SHOPPING
            </Link>
          </Typography>

          {users ? (
            <div>
              <Button variant="outlined" className={classes.button}>
                {users.username}
              </Button>
            </div>
          ) : (
            <Button variant="outlined" className={classes.button}>
              <Link className={classes.link} to="/login">
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
