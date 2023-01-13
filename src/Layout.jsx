import React, {useMemo} from "react";
import {Outlet, NavLink} from "react-router-dom";
import {Navbar, Container, Nav, Badge} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const Layout = () => {
  const shoppingCart = useSelector(({shoppingCart}) => shoppingCart);

  const count = useMemo(
    () =>
      shoppingCart.reduce((acc, el) => {
        acc += el.count;
        return acc;
      }, 0),
    [shoppingCart]
  );

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <NavLink className="navbarBrand" to="/books">
            Books
          </NavLink>
          <Nav className="ms-auto">
            <NavLink className="menu-link" to="/shopping-cart">
              <h6 className="shoppingCartBadge">
                <Badge bg="danger">{count}</Badge>
              </h6>
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mainContainer">
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
