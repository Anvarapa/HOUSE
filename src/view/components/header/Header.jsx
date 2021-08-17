import css from "./header.module.css";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import React from "react";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import  {useState} from "react";

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
/////
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory();
  const submit = (e)=>{
    e.preventDefault()
    if(login === "admin" && password === ("12345")){
      localStorage.setItem("user", JSON.stringify({
        login:login,
        accessToken: "turdaliev"
      }))
      history.push("/dashboard")
    }
  }
  ///////
  return (
    <header className={css.header}>
      <NavLink exact to="/">
        <img src="./img/logo.svg" alt="" />
      </NavLink>
      <ul className={css.ul}>
        <li>
          <NavLink exact to="/">
            For sale
          </NavLink>
        </li>
        <li>

          <Link exact to="/information">
            Information
            </Link>
          <a href="#">About us</a>

        </li>
        <li>
          <Link exact to="/">
          Language
          </Link>
        </li>
      </ul>
      <div className={css.button_log}>
        <button className={css.button} onClick={handleOpen}>
          Log in
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
              <form className={css.login} onSubmit={submit}>
                <img src="./img/logo.svg" alt="" />
                <input
                    value={login}
                    onChange={(e)=>setLogin(e.target.value)}
                  className={css.input}
                  required
                  type="mail"
                  placeholder="Email"
                />
                <input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
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
                  type="submit"
                  disableElevation
                  onClick={handleClose}
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
                <NavLink
                  onClick={handleClose}
                  className={css.signIn}
                  exact
                  to="/signin"
                >
                  Sign in
                </NavLink>
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    </header>
  );
};
