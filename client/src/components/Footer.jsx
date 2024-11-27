import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";

export default function Footer() {
  const iconStyle =
    "border border-1 rounded-1 d-flex align-items-center justify-content-center";

  return (
    <>
      <Container fluid className="bg-success mt-5 pt-5">
        <Row>
          <Col xs={12} md={6} lg={3} className="text-white">
            <h4>
              <strong>Pak Classified</strong>
            </h4>
            <p className="text-muted mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aperiam veritatis ullam quis voluptatibus in mollitia saepe ut
              illo unde impedit, repellat molestiae esse. Odit nam laborum non
            </p>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-white">
            <h4>
              <strong>Quick Links</strong>
            </h4>
            <ul className="text-muted mt-4 list-unstyled">
              <li className="mt-2">
                <FontAwesomeIcon icon={faAngleRight} className="me-2" /> About
                Us
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faAngleRight} className="me-2" /> Contact
                Us
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                Privacy Policy
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                Terms & Conditions
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-white mb-3">
            <h4>
              <strong>Contact</strong>
            </h4>
            <ul className="text-muted mt-4 list-unstyled">
              <li className="mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Abc
                Road Gulber III, Lahore
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" /> 0342-1234567
              </li>
              <li className="mt-2">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                zahid@gmail.com
              </li>
            </ul>
            <div className="d-flex flex-row ">
              <span
                className={`${iconStyle} ms-0 me-2`}
                style={{ width: "40px", height: "40px", fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </span>
              <span
                className={`${iconStyle} mx-2`}
                style={{ width: "40px", height: "40px", fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span
                className={`${iconStyle} mx-2`}
                style={{ width: "40px", height: "40px", fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </span>
              <span
                className={`${iconStyle} mx-2`}
                style={{ width: "40px", height: "40px", fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-white">
            <h4>
              <strong>Newsletter</strong>
            </h4>
            <p className="text-muted mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aperiam
            </p>
            <InputGroup
              className="mb-3 bg-light border border-2 border-light rounded-3"
              style={{ maxWidth: "400px" }}
            >
              <FormControl
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                type="email"
                className=" bg-light border border-0 m-0"
              />
              <Button
                className="m-1 rounded-2 "
                variant="dark"
                id="button-addon2"
              >
                Sign Up
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} className="text-white pb-1">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
              <div className="text-center text-sm-start">
                &copy;{" "}
                <strong>
                  <u>PakClassified.</u>
                </strong>{" "}
                All Rights Reserved. Designed By
                <strong>
                  {" "}
                  <u>Team Z</u>
                </strong>
              </div>
              <Nav className="ms-auto text-white flex-wrap justify-content-center mt-2 mt-sm-0">
                <Nav.Link className="text-white">Home</Nav.Link>
                <Nav.Link className="text-white">Cookies</Nav.Link>
                <Nav.Link className="text-white">Help</Nav.Link>
                <Nav.Link className="text-white">FAQs</Nav.Link>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
