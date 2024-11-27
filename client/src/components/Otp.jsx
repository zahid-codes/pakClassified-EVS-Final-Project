import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Otp() {
  return (
    <>
      <Container>
        <Form
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Row className="w-50">
            {" "}
            {/* This row controls the form width */}
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="text-left">
                  Enter the 6 digit Otp that was sent to your mail: zahidcodez@gmail.com
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Otp"
                  style={{ width: "100%" }} // Ensures input field takes up the full width of its column
                />
              </Form.Group>
              <div className="text-start">
                <Button className="btn btn-sm">Submit</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
