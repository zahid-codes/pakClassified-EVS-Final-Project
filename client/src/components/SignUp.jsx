import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserData } from "../context/userContext";

export default function SignUp() {
  // Form states

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [image, setimage] = useState("");

  // Context states

  const { signupUser, error, ph_error } = UserData();

  // Error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [imageError, setImageError] = useState("");
  const [backendEmailError, setbackendEmailError] = useState("");
  const [backendNumberError, setbackendNumberError] = useState("");

  // onblur handler functions
  const handleNameBlur = () => {
    if (!name) setNameError("Please enter your name.");
    else setNameError("");
  };

  const handleEmailBlur = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) setEmailError("Please enter your email.");
    else if (!emailPattern.test(email)) setEmailError("Invalid email format.");
    else {
      setEmailError("");
      setbackendEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) setPasswordError("Please enter your password.");
    else if (password.length < 6)
      setPasswordError("Password must be at least 6 characters.");
    else setPasswordError("");
  };

  const handleBirthDateBlur = () => {
    if (!birthDate) setBirthDateError("Please select your birth date.");
    else setBirthDateError("");
  };

  const handleContactNumberBlur = () => {
    const phonePattern = /^[0-9]{10}$/;
    if (!contactNumber)
      setContactNumberError("Please enter your contact number.");
    else if (!phonePattern.test(contactNumber))
      setContactNumberError("Invalid contact number.");
    else {
      setContactNumberError("");
      setbackendNumberError("");
    }
  };

  const handleImageBlur = () => {
    if (!image) setImageError("Please upload an image.");
    else setImageError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setbackendEmailError(error);
    setbackendNumberError(ph_error);

    if (
      nameError ||
      emailError ||
      passwordError ||
      birthDateError ||
      contactNumberError ||
      imageError ||
      name == "" ||
      email == "" ||
      password == "" ||
      birthDate == "" ||
      contactNumber == "" ||
      image == ""
    ) {
      handleNameBlur();
      handleEmailBlur();
      handlePasswordBlur();
      handleBirthDateBlur();
      handleContactNumberBlur();
      handleImageBlur();
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("birthDate", birthDate);
    formData.append("contactNumber", contactNumber);
    formData.append("image", image);
    await signupUser(formData);
  };
  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Container className="">
          <Row className="justify-content-center">
            <Col
              xs={10}
              sm={10}
              md={7}
              lg={4}
              className="border rounded-5 p-4 shadow-lg"
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    onBlur={handleNameBlur}
                    type="text"
                    placeholder="Enter name"
                  />
                  {nameError && (
                    <small className="text-danger fw-bolder">{nameError}</small>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    onBlur={handleEmailBlur}
                    type="email"
                    placeholder="Enter email"
                  />
                  {emailError && (
                    <small className="text-danger fw-bolder">
                      {emailError}
                    </small>
                  )}
                  {backendEmailError && !emailError && (
                    <small className="text-danger  fw-bolder">
                      {backendEmailError}
                    </small>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                    type="password"
                    placeholder="Enter password"
                  />
                  {passwordError && (
                    <small className="text-danger fw-bolder">
                      {passwordError}
                    </small>
                  )}
                </Form.Group>
                {/* <Form.Group className="mb-3">
                  <Form.Label>Enter date of birth</Form.Label>
                  <Form.Control
                    value={birthDate}
                    onChange={(e) => setbirthDate(e.target.value)}
                    onBlur={handleBirthDateBlur}
                    type="date"
                    placeholder="Enter date of birth"
                  />
                </Form.Group> */}
                <DatePicker
                  className="form-control"
                  onBlur={handleBirthDateBlur}
                  selected={birthDate}
                  onChange={(date) => setbirthDate(date)}
                  placeholderText="Enter date of birth"
                />
                {birthDateError && (
                  <small className="text-danger fw-bolder">
                    {birthDateError}
                  </small>
                )}
                <Form.Group className="mt-3">
                  <Form.Control
                    value={contactNumber}
                    onChange={(e) => setcontactNumber(e.target.value)}
                    onBlur={handleContactNumberBlur}
                    type="number"
                    placeholder="Enter contact number"
                  />
                  {contactNumberError && (
                    <small className="text-danger fw-bolder">
                      {contactNumberError}
                    </small>
                  )}
                  {backendNumberError && !contactNumberError && (
                    <small className="text-danger  fw-bolder">
                      {backendNumberError}
                    </small>
                  )}
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Control
                    onChange={(e) => setimage(e.target.files[0])}
                    onBlur={handleImageBlur}
                    type="file"
                  />
                  {imageError && (
                    <small className="text-danger fw-bolder">
                      {imageError}
                    </small>
                  )}
                </Form.Group>
                <div className="d-grid mt-3">
                  <Button type="submit" size="md" variant="dark">
                    Signup
                  </Button>
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                  <Link to="/login">Already have an account?</Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
