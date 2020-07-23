import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import "./styles.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const Navbar = (props) => {
  const { classes } = props;

  const handleClick = (e) => {
    console.log("hello");
  };

  return (
    <div>
      <AppBar position="static" className={classes.test}>
        <Toolbar className={classes.test2}>
          <Typography>
            <Link className={classes.link} to="/">
              SHOPPING
            </Link>
          </Typography>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={handleClick}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
