import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Form,
  Modal,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { PostAdData } from "../context/postAdContext";
import { categoriesData } from "../context/categoriesContext";
import { CityAreaData } from "../context/cityAreaContext";
import { UserData } from "../context/userContext";
import { TypesData } from "../context/typeContext";
import { CitiesData } from "../context/cityContext";
import { useState } from "react";

export default function PostAdvertisementForm() {
  //imported contexts

  const { categories } = categoriesData();
  const { CityAreas } = CityAreaData();
  const { Types } = TypesData();
  const { Cities } = CitiesData();
  const { user } = UserData();
  const { Add, AdError } = PostAdData();

  //states for data

  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [startsOn, setstartsOn] = useState("");
  const [endsOn, setendsOn] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [typeId, settypeId] = useState("");
  const [cityId, setcityId] = useState("");
  const [cityAreaId, setcityAreaId] = useState("");
  const [image, setimage] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  //onblur states handelers

  const [nameError, setnameError] = useState(false);
  const [priceError, setpriceError] = useState(false);
  const [descriptionError, setdescriptionError] = useState(false);
  const [startsOnError, setstartsOnError] = useState(false);
  const [endsOnError, setendsOnError] = useState(false);
  const [categoryIdError, setcategoryIdError] = useState(false);
  const [typeIdError, settypeIdError] = useState(false);
  const [cityIdError, setcityIdError] = useState(false);
  const [cityAreaIdError, setcityAreaIdError] = useState(false);
  const [imageError, setimageError] = useState(false);

  //onblur handeler functions

  const HandleNameBlur = () => {
    if (!name) {
      setnameError("please enter car name");
    } else {
      setnameError("");
    }
  };
  const HandlePriceBlur = () => {
    if (!price) {
      setpriceError("please enter price");
    } else if (price <= 0) {
      setpriceError("please enter a valid price");
    } else {
      setpriceError("");
    }
  };
  const HandleDescriptionBlur = () => {
    if (!description) {
      setdescriptionError("please enter description");
    } else {
      setdescriptionError("");
    }
  };

  const HandleStartsOnBlur = () => {
    if (!startsOn) {
      setstartsOnError("select starting date");
    } else {
      setstartsOnError("");
    }
  };

  const HandleEndsOnBlur = () => {
    if (!endsOn) {
      setendsOnError("select ending date");
    } else {
      setendsOnError("");
    }
  };

  const HandleCategoryBlur = () => {
    if (!categoryId) {
      setcategoryIdError("Please select a category");
    } else {
      setcategoryIdError("");
    }
  };

  const HandleTypeBlur = () => {
    if (!typeId) {
      settypeIdError("Please select a type");
    } else {
      settypeIdError("");
    }
  };

  const HandleCityBlur = () => {
    if (!cityId) {
      setcityIdError("Please select a city");
    } else {
      setcityIdError("");
    }
  };

  const HandleCityAreaBlur = () => {
    if (!cityAreaId) {
      setcityAreaIdError("Please select a city area");
    } else {
      setcityAreaIdError("");
    }
  };

  const HandleImageBlur = () => {
    if (!image) {
      setimageError("Please upload an image");
    } else {
      setimageError("");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    HandleNameBlur();
    HandlePriceBlur();
    HandleDescriptionBlur();
    HandleStartsOnBlur();
    HandleEndsOnBlur();
    HandleCategoryBlur();
    HandleTypeBlur();
    HandleCityBlur();
    HandleCityAreaBlur();
    HandleImageBlur();

    if (
      nameError ||
      priceError ||
      descriptionError ||
      startsOnError ||
      endsOnError ||
      categoryIdError ||
      typeIdError ||
      cityIdError ||
      cityAreaIdError ||
      imageError ||
      name == "" ||
      price == "" ||
      description == "" ||
      startsOn == "" ||
      endsOn == "" ||
      categoryId == "" ||
      typeId == "" ||
      cityId == "" ||
      cityAreaId == "" ||
      image == ""
    ) {
      return;
    }

    setShow(false);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("postedById", user._id);
    formData.append("startsOn", startsOn);
    formData.append("endsOn", endsOn);
    formData.append("typeId", typeId);
    formData.append("categoryId", categoryId);
    formData.append("cityId", cityId);
    formData.append("cityAreaId", cityAreaId);
    formData.append("image", image);

    const result = await Add(formData);
    if (AdError) {
      setToastMessage(AdError);
      setShowToast(true);
    } else {
      setToastMessage("Advertisement added succesfully");
      setShowToast(true);
    }
    setname("");
    setprice("");
    setdescription("");
    setstartsOn("");
    setendsOn("");
    setcategoryId("");
    settypeId("");
    setcityId("");
    setcityAreaId("");
    setimage("");
  };

  return (
    <>
      <Button className="btn btn-success p-2 mx-2" onClick={handleShow}>
        Post Advertisement
        <FontAwesomeIcon className="mx-3" icon={faArrowRight} />
      </Button>

      <Modal show={show} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Post Advertisement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onBlur={HandleNameBlur}
                onChange={(e) => setname(e.target.value)}
                type="text"
              />
            </Form.Group>
            {nameError && (
              <small className="text-danger fw-bolder">{nameError}</small>
            )}
            <Form.Group className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={price}
                onBlur={HandlePriceBlur}
                onChange={(e) => setprice(e.target.value)}
                type="number"
              />
            </Form.Group>
            {priceError && (
              <small className="text-danger fw-bolder">{priceError}</small>
            )}
            <Form.Group className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                onBlur={HandleDescriptionBlur}
                onChange={(e) => setdescription(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            {descriptionError && (
              <small className="text-danger fw-bolder">
                {descriptionError}
              </small>
            )}
            <Form.Group className="mb-3">
              <Row className="mt-3">
                <Col xs={6}>
                  {" "}
                  <Form.Label>Starts On</Form.Label>
                  <Form.Control
                    onBlur={HandleStartsOnBlur}
                    value={startsOn}
                    onChange={(e) => setstartsOn(e.target.value)}
                    type="date"
                  />{" "}
                  {startsOnError && (
                    <small className="text-danger fw-bolder">
                      {startsOnError}
                    </small>
                  )}
                </Col>

                <Col xs={6}>
                  <Form.Label>Ends On</Form.Label>
                  <Form.Control
                    onBlur={HandleEndsOnBlur}
                    value={endsOn}
                    onChange={(e) => setendsOn(e.target.value)}
                    type="date"
                  />
                  {endsOnError && (
                    <small className="text-danger fw-bolder">
                      {endsOnError}
                    </small>
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Categories</Form.Label>
                  <Form.Select
                    onBlur={HandleCategoryBlur}
                    value={categoryId}
                    onChange={(e) => setcategoryId(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="" disabled>
                      Select Categories
                    </option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                  {categoryIdError && (
                    <small className="text-danger fw-bolder">
                      {categoryIdError}
                    </small>
                  )}
                </Col>
                <Col>
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    onBlur={HandleTypeBlur}
                    value={typeId}
                    onChange={(e) => settypeId(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    {Types.map((Type) => (
                      <option key={Type._id} value={Type._id}>
                        {Type.name}
                      </option>
                    ))}
                  </Form.Select>
                  {typeIdError && (
                    <small className="text-danger fw-bolder">
                      {typeIdError}
                    </small>
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    onBlur={HandleCityBlur}
                    value={cityId}
                    onChange={(e) => setcityId(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    {Cities.map((City) => (
                      <option key={City._id} value={City._id}>
                        {City.name}
                      </option>
                    ))}
                  </Form.Select>
                  {cityIdError && (
                    <small className="text-danger fw-bolder">
                      {cityIdError}
                    </small>
                  )}
                </Col>
                <Col>
                  <Form.Label>City Area</Form.Label>
                  <Form.Select
                    onBlur={HandleCityAreaBlur}
                    value={cityAreaId}
                    onChange={(e) => setcityAreaId(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option disabled value="">
                      Select City Area
                    </option>
                    {CityAreas.map((CityArea) => (
                      <option value={CityArea._id} key={CityArea._id}>
                        {CityArea.name}
                      </option>
                    ))}
                  </Form.Select>
                  {cityAreaIdError && (
                    <small className="text-danger fw-bolder">
                      {cityAreaIdError}
                    </small>
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                onBlur={HandleImageBlur}
                onChange={(e) => setimage(e.target.files[0])}
                type="file"
                name="image"
              />
            </Form.Group>
            {imageError && (
              <small className="text-danger fw-bolder">{imageError}</small>
            )}

            <Modal.Footer className="mt-3">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="success">
                Post Advertisement
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000} 
          autohide
          bg="success" 
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white fw-bolder">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
