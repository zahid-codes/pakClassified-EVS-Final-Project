import {
  faEnvelopeOpen,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Contact() {
  const iconStyle =
    "rounded-circle d-flex align-items-center justify-content-center";

  return (
    <>
      {/* Hero Section */}
      <div className="position-relative" style={{ height: "250px" }}>
        <img
          className="d-block w-100"
          src="/herosection_image_2.jpeg"
          alt="Featured Image"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="fw-bold">Contact Us</h1>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-center fw-bold text-success mt-5">
        Get in Touch with Us
      </h2>

      {/* Contact Info Section */}
      <Container fluid className="my-5">
        <Row className="g-4 justify-content-center">
          <Col xs={12} md={4}>
            <div className="bg-success py-4 px-3 rounded-3 text-center shadow-sm">
              <div
                className={`${iconStyle} bg-white mx-auto`}
                style={{ width: "50px", height: "50px", fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-dark" />
              </div>
              <h6 className="mt-3 text-white">Lahore, Pakistan</h6>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="bg-success py-4 px-3 rounded-3 text-center shadow-sm">
              <div
                className={`${iconStyle} bg-white mx-auto`}
                style={{ width: "50px", height: "50px", fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faEnvelopeOpen} className="text-dark" />
              </div>
              <h6 className="mt-3 text-white">zahidcodez@gmail.com</h6>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="bg-success py-4 px-3 rounded-3 text-center shadow-sm">
              <div
                className={`${iconStyle} bg-white mx-auto`}
                style={{ width: "50px", height: "50px", fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faPhone} className="text-dark" />
              </div>
              <h6 className="mt-3 text-white">0341-1234567</h6>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Contact Form and Map Section */}
      <Container fluid className="my-5">
        <Row className="g-4">
          <Col lg={6} xs={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1635210886566!2d74.33457157435524!3d31.492188848536138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043fb52276b5%3A0x2682e1fa63fcd065!2sEVS%20Training%20Institute%20Lahore!5e0!3m2!1sen!2s!4v1730439753274!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg={6} xs={12}>
            <p className="fw-medium">
              For any inquiries, assistance, or feedback, please fill out our
              contact form below. Our team is committed to responding promptly
              to ensure your experience with PakClassified is exceptional.
            </p>
            <Form>
              <Row className="g-3">
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Control
                      size="lg"
                      placeholder="Your Name"
                      type="text"
                      className="shadow-sm"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Control
                      size="lg"
                      placeholder="Your Email"
                      type="email"
                      className="shadow-sm"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mt-3">
                <Form.Control
                  size="lg"
                  placeholder="Subject"
                  type="text"
                  className="shadow-sm"
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Control
                  size="lg"
                  placeholder="Leave a message here"
                  as="textarea"
                  rows={5}
                  className="shadow-sm"
                />
              </Form.Group>
              <div className="d-grid gap-2 mt-4">
                <Button variant="success" size="lg" className="shadow">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
