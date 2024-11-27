import {
  faRightToBracket,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect, useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PostAdvertisementForm from "./PostAdvertisementForm";
import { UserData } from "../context/userContext";
import { categoriesData } from "../context/categoriesContext";
export default function NavBar() {
  const { isAuth } = UserData();
  const { categories } = categoriesData();
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="px-3" expand="lg" bg="light" data-bs-theme="light">
        <Navbar.Brand
          as={Link}
          to="/home"
          className="text-success fs-4 fw-semibold"
        >
          PakClassified
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-column flex-lg-row">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              {categories.map((category) => (
                <NavDropdown.Item
                  onClick={() => navigate(`/categories/${category._id}`)}
                  key={category._id}
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            {isAuth ? (
              <>
                <PostAdvertisementForm />
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="profile-tooltip">Profile</Tooltip>}
                >
                  <Button as={Link} to="/profile" className="btn btn-light ">
                    <FontAwesomeIcon
                      className="mx-1 text-success"
                      icon={faUser}
                    />
                  </Button>
                </OverlayTrigger>
              </>
            ) : (
              <>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="login-tooltip">Log In</Tooltip>}
                >
                  <Button as={Link} to="/login" className="btn btn-light">
                    <FontAwesomeIcon
                      className="mx-1 text-success"
                      icon={faRightToBracket}
                    />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="signup-tooltip">Sign Up</Tooltip>}
                >
                  <Button as={Link} to="/signup" className="btn btn-light">
                    <FontAwesomeIcon
                      className="mx-1 text-success"
                      icon={faUserPlus}
                    />
                  </Button>
                </OverlayTrigger>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
