import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import EditUser from "./EditUser";
import EditAdvertisement from "./EditAdvertisement";
import { useState } from "react";
import { UserData } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { PostAdData } from "../context/postAdContext";

export default function UserProfile() {
  const navigate = useNavigate();
  const {
    Advertisements,
    deleteAd,
    AdshowToast,
    setAdshowToast,
    AdtoastMessage,
    del,
    setdel,
  } = PostAdData();

  const { user, handleLogout, showToast, toastMessage, setShowToast } =
    UserData();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this advertisement?")) {
      deleteAd(id);
    }
  };

  const filteredAdvertisements = Advertisements.filter(
    (Advertisement) =>
      Advertisement.postedById && Advertisement.postedById._id === user._id
  );

  return (
    <>
      {/* Hero Section */}
      <div className="position-relative" style={{ height: "200px" }}>
        <img
          className="d-block w-100"
          src="/herosection_image_2.jpeg"
          alt="Featured Image"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div
          className="position-absolute top-50 start-25 translate-middle-y text-start text-white"
          style={{ padding: "0 20px", paddingLeft: "100px" }}
        >
          <h1 className="fs-3 fs-md-1">User Dashboard</h1>
        </div>
      </div>

      <Container fluid className="px-3 mt-4">
        <Row>
          <Col lg={3} md={4} sm={12} className="mb-4">
            <Card className="text-center">
              <div className="d-flex justify-content-center mt-3">
                <Card.Img
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                  variant="top"
                  className="rounded-circle border border-2 border-success-subtle"
                  src={
                    user.image
                      ? `http://localhost:5000/${user.image}`
                      : "/profile_picture.jpg"
                  }
                />
              </div>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <ul className="text-muted mt-2 list-unstyled">
                  <li className="mt-2">
                    <strong>Email: </strong>
                    {user.email}
                  </li>
                  <li className="mt-2">
                    <strong>Contact number: </strong>
                    {user.contactNumber}
                  </li>
                  <li className="mt-2">
                    <strong>Dob: </strong>
                    {new Date(user.birthDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </li>
                </ul>
                <div className="d-flex justify-content-center mt-3">
                  <EditUser />
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={9} md={8} sm={12}>
            <h1 className="fw-bold text-start text-success fs-4 fs-md-1">
              Posted Advertisements
            </h1>
            {filteredAdvertisements.length > 0 ? (
              filteredAdvertisements.map((Advertisement) => (
                <Card className="w-100 my-3" key={Advertisement._id}>
                  <Row className="g-0">
                    <Col
                      xs={12}
                      md={3}
                      className="d-flex justify-content-center"
                    >
                      <Card.Img
                        variant="top"
                        src={
                          Advertisement.image
                            ? `http://localhost:5000/${Advertisement.image}`
                            : "/1.png"
                        }
                        alt="Hatchback"
                        className="m-2 rounded-2"
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col xs={12} md={9} className="d-flex align-items-center">
                      <Card.Body>
                        <Card.Title>{Advertisement.name}</Card.Title>
                        <Card.Text
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                          }}
                        >
                          {Advertisement.description}
                        </Card.Text>
                        <ul className="text-muted mt-2 list-unstyled">
                          <li className="mt-2">
                            <strong>Price: </strong>
                            {Advertisement.price}
                          </li>
                          <li className="mt-2">
                            <strong>City Area: </strong>
                            {Advertisement.cityAreaId.name}
                          </li>
                        </ul>
                        <div className="d-flex flex-wrap gap-2 mt-3">
                          <EditAdvertisement id={Advertisement._id} />
                          <Button
                            onClick={() => handleDelete(Advertisement._id)}
                            variant="danger"
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))
            ) : (
              <h3 className="text-center text-muted mt-4">No data to show</h3>
            )}
          </Col>
        </Row>
      </Container>

      {showToast && (
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
            <Toast.Body className="text-white fw-bold">
              {toastMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
      {AdshowToast && (
        <ToastContainer position="top-end" className="p-3">
          <Toast
            onClose={() => {
              setAdshowToast(false);
              setdel(false);
            }}
            show={AdshowToast}
            delay={5000}
            autohide
            bg={del ? "danger" : "success"}
          >
            <Toast.Header closeButton>
              <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body className="text-white fw-bold">
              {AdtoastMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
}
