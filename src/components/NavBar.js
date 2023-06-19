import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="primary" variant="primary" style={{marginBottom:20}}>
      <Container>
        <Navbar.Brand style={{ color: "white" }}> Единый реестр </Navbar.Brand>{" "}
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white", margin: 5 }}>
            <Button
              style={{ marginRight: 10 }}
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Панель администратора{" "}
            </Button>{" "}
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти{" "}
            </Button>{" "}
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white", margin: 5 }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация{" "}
            </Button>{" "}
          </Nav>
        )}{" "}
      </Container>{" "}
    </Navbar>
  );
});

export default NavBar;
