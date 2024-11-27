import { faArrowRight, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Image } from "react-bootstrap";
import { PostAdData } from "../context/postAdContext";
import { categoriesData } from "../context/categoriesContext";
import { TypesData } from "../context/typeContext";
import { CitiesData } from "../context/cityContext";
import { CityAreaData } from "../context/cityAreaContext";

export default function EditAdvertisement(id) {
  const { GetAd, Advertisement, updateAd } = PostAdData();
  const [show, setShow] = useState(false);
  const { categories } = categoriesData();
  const { Types } = TypesData();
  const { Cities } = CitiesData();
  const { CityAreas } = CityAreaData();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [AdvId, setAdvId] = useState(Advertisement._id);
  const [recData, setrecData] = useState("");

  const EditBtn = async () => {
    handleShow();
    const Ad_data = await GetAd(id.id);
    if (Ad_data != "") {
      setrecData(Ad_data);
    }
  };

  useEffect(() => {
    if (recData && Advertisement) {
      setAdvId(recData._id);
      setname(recData.name);
      setprice(recData.price);
      setdescription(recData.description);
      setStartsOn(
        recData.startsOn
          ? new Date(recData.startsOn).toISOString().split("T")[0]
          : ""
      );
      setEndsOn(
        recData.endsOn
          ? new Date(recData.endsOn).toISOString().split("T")[0]
          : ""
      );
      setcategory(recData.categoryId ? recData.categoryId._id : "");
      settype(recData.typeId ? recData.typeId._id : "");
      setcity(recData.cityId ? recData.cityId._id : "");
      setcityArea(recData.cityAreaId ? recData.cityAreaId._id : "");
      setimage(recData.image ? recData.image : "");
    }
  }, [Advertisement]);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("startsOn", StartsOn);
    formData.append("endsOn", EndsOn);
    formData.append("typeId", type);
    formData.append("categoryId", category);
    formData.append("cityId", city);
    formData.append("cityAreaId", cityArea);
    formData.append("image", image);

    updateAd(AdvId, formData);
  };

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [StartsOn, setStartsOn] = useState("");
  const [EndsOn, setEndsOn] = useState("");
  const [category, setcategory] = useState("");
  const [type, settype] = useState("");
  const [city, setcity] = useState("");
  const [cityArea, setcityArea] = useState("");
  const [image, setimage] = useState("");
  return (
    <>
      <Button className="btn btn-success me-2" onClick={EditBtn}>
        Edit <FontAwesomeIcon className=" " icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Post Advertisement</Modal.Title>
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
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={price}
                onChange={(e) => setprice(e.target.value)}
                type="number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  {" "}
                  <Form.Label>Starts On</Form.Label>
                  <Form.Control
                    value={StartsOn}
                    onChange={(e) => setStartsOn(e.target.value)}
                    type="date"
                    autoFocus
                  />
                </Col>
                <Col>
                  <Form.Label>Ends On</Form.Label>
                  <Form.Control
                    value={EndsOn}
                    onChange={(e) => setEndsOn(e.target.value)}
                    type="date"
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Categories</Form.Label>
                  <Form.Select
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                  >
                    <option
                      value={
                        Advertisement.categoryId
                          ? Advertisement.categoryId._id
                          : ""
                      }
                      selected
                    >
                      {Advertisement.categoryId
                        ? Advertisement.categoryId.name
                        : ""}
                    </option>
                    {categories
                      .filter(
                        (category) =>
                          Advertisement.categoryId &&
                          category._id !== Advertisement.categoryId._id
                      )
                      .map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    value={type}
                    onChange={(e) => settype(e.target.value)}
                  >
                    <option
                      value={
                        Advertisement.typeId ? Advertisement.typeId._id : ""
                      }
                      selected
                    >
                      {Advertisement.typeId ? Advertisement.typeId.name : ""}
                    </option>
                    {Types.filter(
                      (Type) =>
                        Advertisement.typeId &&
                        Type._id !== Advertisement.typeId._id
                    ).map((Type) => (
                      <option key={Type._id} value={Type._id}>
                        {Type.name}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option
                      value={
                        Advertisement.cityId ? Advertisement.cityId._id : ""
                      }
                      selected
                    >
                      {Advertisement.cityId ? Advertisement.cityId.name : ""}
                    </option>
                    {Cities.filter(
                      (City) =>
                        Advertisement.cityId &&
                        City._id !== Advertisement.cityId._id
                    ).map((City) => (
                      <option key={City._id} value={City._id}>
                        {City.name}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>City Area</Form.Label>
                  <Form.Select onChange={(e) => setcityArea(e.target.value)}>
                    <option
                      value={
                        Advertisement.cityAreaId
                          ? Advertisement.cityAreaId._id
                          : ""
                      }
                      selected
                    >
                      {Advertisement.cityAreaId
                        ? Advertisement.cityAreaId.name
                        : ""}
                    </option>
                    {CityAreas.filter(
                      (CityArea) =>
                        Advertisement.cityAreaId &&
                        CityArea._id !== Advertisement.cityAreaId._id
                    ).map((CityArea) => (
                      <option key={CityArea._id} value={CityArea._id}>
                        {CityArea.name}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <div className="mb-3">
                <Image
                  src={`http://localhost:5000/${Advertisement.image}`}
                  alt="Uploaded Advertisement Image"
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <Form.Control
                type="file"
                onChange={(e) => setimage(e.target.files[0])}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
