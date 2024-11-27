import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { UserData } from "../context/userContext";

export default function EditUser() {
  const [show, setShow] = useState(false);
  const { user, updateUser } = UserData();
  const formattedDate = user.birthDate
    ? new Date(user.birthDate).toISOString().split("T")[0]
    : "";
  const [name, setname] = useState(user.name);
  const [email, setemail] = useState(user.email);
  const [number, setnumber] = useState(user.contactNumber);
  const [dob, setdob] = useState(formattedDate);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();

    updateUser({
      id: user._id,
      name: name,
      email: email,
      contactNumber: number,
      birthDate: dob,
    });

    handleClose();
  };
  return (
    <>
      <Button className="me-2 " variant="success" onClick={handleShow}>
        Edit <FontAwesomeIcon className="" icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                onChange={(e) => setnumber(e.target.value)}
                value={number}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                onChange={(e) => setdob(e.target.value)}
                value={dob}
                type="date"
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Save changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
