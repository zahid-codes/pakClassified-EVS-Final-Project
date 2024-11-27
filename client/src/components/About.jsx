import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div className="position-relative" style={{ height: "200px" }}>
        <Image
          className="d-block w-100" 
          src="/herosection_image_2.jpeg"
          alt="Featured Image"
          style={{ height: "100%", objectFit: "cover" }} 
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div
          className="position-absolute top-50 start-50 translate-middle text-white"
          style={{ padding: "0 20px" }}
        >
          <h1>About Us</h1>
        </div>
      </div>
      <Container fluid className="mt-5 px-3 pb-5">
        <Row className="gx-4 gy-4 align-items-center">
          <Col lg={6} md={12}>
            <Row className="gx-0 gy-0 ">
              <Col xs={6} sm={6} lg={6}>
                <Image
                  fluid
                  src="/1.png"
                  alt="Image 1"
                  className="rounded-0 shadow-sm img-fluid"
                />
              </Col>
              <Col xs={6} sm={6} lg={6}>
                <Image
                  fluid
                  src="/2.png"
                  alt="Image 2"
                  className="rounded-0 shadow-sm img-fluid"
                />
              </Col>
              <Col xs={6} sm={6} lg={6}>
                <Image
                  fluid
                  src="/3.png"
                  alt="Image 3"
                  className="rounded-0 shadow-sm img-fluid"
                />
              </Col>
              <Col xs={6} sm={6} lg={6}>
                <Image
                  fluid
                  src="/4.png"
                  alt="Image 4"
                  className="rounded-0 shadow-sm img-fluid"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12}>
            <div className="ms-lg-3">
              <h2 className="text-success text-start">
                PakClassified is a comprehensive online platform where users can
                browse, buy, sell, and compare cars
              </h2>
              <p className="mt-4 text-muted text-start">
                Welcome to PakClassified, your premier destination for all
                things automotive in Pakistan. Our platform is designed to offer
                a seamless experience for users looking to browse, buy, sell,
                and compare cars. Whether you are a car enthusiast or a
                first-time buyer, PakClassified is committed to making your car
                shopping journey smooth and hassle-free.
              </p>
              <ul className="text-muted mt-4 list-unstyled text-start">
                <li className="mt-2">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2" />{" "}
                  Customer Support
                </li>
                <li className="mt-2">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2" />{" "}
                  Technical Assistance
                </li>
                <li className="mt-2">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                  Feedback and suggestions
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
