import css from "./header.module.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import React from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "530px",
    borderRadius: "5px",
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <header className={css.header}>
      <a href="#">
        <img src="./img/logo.svg" alt="" />
      </a>
      <ul className={css.ul}>
        <li>
          <NavLink exact to="/">
            For sale
          </NavLink>
        </li>
        <li>
          <a href="#">Information</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <NavLink exact to="/signin">
            Sign in
          </NavLink>
        </li>
      </ul>
      <div className={css.button_log}>
        <button className={css.button} onClick={handleOpen}>
          Вход{" "}
        </button>
        <img src="./img/man_logo.svg" alt="" />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className={css.login}>
                <img src="./img/logo.svg" alt="" />
                <input
                  className={css.input}
                  required
                  type="mail"
                  placeholder="Email"
                />
                <input
                  className={css.input}
                  required
                  type="password"
                  placeholder="Password"
                />
                <a className={css.login__a} href="#">
                  I forget my password
                </a>
                <Button
                  className={css.loginButton}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  <p className={css.loginButton__p}>LOGIN</p>
                </Button>
                <Button
                  className={css.connect_g}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  <p className={css.loginButton__p}>Connect with Google</p>
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </header>
  );
};
