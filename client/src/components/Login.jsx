import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/userContext";

export default function Login() {
  const navigate = useNavigate();
  const {
    loginUser,
    btnLoading,
    error,
    setShowToast,
    showToast,
    toastMessage,
  } = UserData();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required*");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError(""); 
    }
  };
  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Password is required*");
    } else {
      setPasswordError(""); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleEmailBlur();
    handlePasswordBlur();

    if (EmailError || PasswordError) {
      return;
    }

    await loginUser(email, password);
  };
  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Container className="">
          <Row className="justify-content-center ">
            <Col
              xs={10}
              sm={10}
              md={7}
              lg={4}
              className="border rounded-5 p-4 shadow-lg"
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="" controlId="email">
                  <Form.Control
                    value={email}
                    onBlur={handleEmailBlur}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    placeholder="Enter email*"
                  />
                </Form.Group>
                {EmailError && (
                  <small className="text-danger fw-bolder">{EmailError}</small>
                )}
                <Form.Group className="mt-3" controlId="password">
                  <Form.Control
                    value={password}
                    onBlur={handlePasswordBlur}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    placeholder="Enter password*"
                  />
                </Form.Group>
                {PasswordError && (
                  <small className="text-danger fw-bolder">
                    {PasswordError}
                  </small>
                )}
                {EmailError || PasswordError || !email || !password ? (
                  ""
                ) : (
                  <small className="text-danger mb-2 fw-bolder">{error}</small>
                )}
                <div className="d-grid gap-2 mt-3">
                  <Button
                    disabled={btnLoading}
                    size="md"
                    variant="dark"
                    type="submit"
                  >
                    {btnLoading ? "Please wait" : "Login"}
                  </Button>
                </div>
              </Form>
              <hr />
              <div className="d-grid gap-2">
                <Link
                  className=" btn btn-success text-white text-decoration-none"
                  to="/signup"
                  size="md"
                >
                  Create new account
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          bg="success"
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white fw-bold">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
