import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { categoriesData } from "../context/categoriesContext";
import { CityAreaData } from "../context/cityAreaContext";
import { useState } from "react";
import { PostAdData } from "../context/postAdContext";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const { categories } = categoriesData();
  const { CityAreas } = CityAreaData();
  const [Keyword, setKeyword] = useState("");
  const [Category, setCategory] = useState("");
  const [cityArea, setcityArea] = useState("");
  const [SearchedData, setSearchedData] = useState(false);

  const { Advertisements } = PostAdData();
  // const filteredAdvertisementsByCategory = () => {
  //   if (Category && Category != "") {
  //     return Advertisements.filter((Advertisement) => {
  //       Advertisement.categoryId && Advertisement.categoryId._id === Category;
  //     });
  //   } else {
  //     return Advertisements;
  //   }
  // };
  const filteredAdvertisementsByCategory = () => {
    if (Category && Category !== "") {
      return Advertisements.filter(
        (Advertisement) =>
          Advertisement.categoryId && Advertisement.categoryId._id === Category
      );
    } else {
      return Advertisements;
    }
  };
  const filteredAdvertisementsByCityArea = () => {
    if (cityArea && cityArea !== "") {
      return filteredAdvertisementsByCategory().filter(
        (Ad) => Ad.cityAreaId && Ad.cityAreaId._id === cityArea
      );
    } else {
      return filteredAdvertisementsByCategory();
    }
  };
  const filteredAdvertisementsByKeyword = () => {
    if (Keyword && Keyword !== "") {
      return filteredAdvertisementsByCityArea().filter(
        (Ad) => Ad.name && Ad.name.toLowerCase().includes(Keyword.toLowerCase())
      );
    } else {
      return filteredAdvertisementsByCityArea();
    }
  };

  const filteredData = filteredAdvertisementsByKeyword();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Keyword);
    console.log(cityArea);
    console.log(Category);
    if (Keyword == "" && cityArea == "" && Category == "") {
      console.log("no data to search");
    } else {
      setSearchedData(true);
      console.log(filteredData);
    }
    // setKeyword("");
    // setCategory("");
    // setcityArea("");
  };
  return (
    <>
      <div className="bg-success py-2 px-3">
        <Row className="g-0  ">
          <Col xs={12} md={3} className="rounded-1 px-3 my-2">
            <Form.Control
              value={Keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              type="text"
              placeholder="Keyword"
            />
          </Col>
          <Col xs={12} md={3} className="rounded-1 px-3 my-2">
            <Form.Select
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              aria-label="Default select example"
            >
              <option disabled value="">
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} md={3} className="rounded-1 px-3 my-2">
            <Form.Select
              value={cityArea}
              onChange={(e) => {
                setcityArea(e.target.value);
              }}
              aria-label="Default select example"
            >
              <option disabled value="">
                Select City Area
              </option>
              {CityAreas.map((CityArea) => (
                <option key={CityArea._id} value={CityArea._id}>
                  {CityArea.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} md={3} className="px-3 my-2 d-grid">
            <Button className="btn btn-dark" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </Button>
          </Col>
        </Row>
      </div>
      {SearchedData && filteredData.length != 0 ? (
        <>
          <h2 className=" ms-3 text-center text-success mt-3">
            Search Results:
          </h2>
          <Container>
            {filteredData.map((Ad) => (
              <Card key={Ad._id} className="w-100 mt-3">
                <Row className="g-0">
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Card.Img
                      variant="top"
                      src={
                        Ad.image
                          ? `http://localhost:5000/${Ad.image}`
                          : "/public/cevic_img.jpg"
                      }
                      alt="Hatchback"
                      className="m-2 rounded-2"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col xs={12} md={8} className="d-flex align-items-center p-2">
                    <Card.Body className="p-0">
                      <Card.Title>{Ad.name}</Card.Title>
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
                        {Ad.description}
                      </Card.Text>
                      <Button
                        variant="success"
                        onClick={() => navigate(`/cardetails/${Ad._id}`)}
                        className="w-100"
                      >
                        More Details
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Container>
        </>
      ) : SearchedData && filteredData.length === 0 ? (
        <>
          <h2 className=" ms-3 text-center text-success mt-3">
            Search Results:
          </h2>
          <h4 className="text-center text-danger mt-3">No Results Found!!!</h4>
        </>
      ) : (
        ""
      )}
    </>
  );
}
