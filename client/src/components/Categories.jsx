import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { categoriesData } from "../context/categoriesContext";
import { useEffect } from "react";
import { PostAdData } from "../context/postAdContext";

export default function Categories() {
  const { id } = useParams();
  const { category, getCategory } = categoriesData();
  const { Advertisements } = PostAdData();
  const navigate = useNavigate();

  const filteredAdvertisements = Advertisements.filter(
    (Advertisement) =>
      Advertisement.categoryId && Advertisement.categoryId._id === id
  );
  useEffect(() => {
    if (id) getCategory(id);
  }, [id, getCategory]);
  return (
    <>
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
          style={{ paddingLeft: "100px" }}
        >
          <h1>Advertisement Categories</h1>
        </div>
      </div>
      <h1 className="fw-bold text-center text-success mt-4">{category.name}</h1>

      <Container fluid className="px-3 ">
        {filteredAdvertisements.length > 0 ? (
          filteredAdvertisements.map((Advertisement) => (
            <Card
              key={Advertisement._id}
              className="w-100 mt-3"
              style={{ height: "auto" }}
            >
              <Row>
                <Col xs={11} md={4} lg={3} className="mb-3">
                  <Card.Img
                    variant="top"
                    src={
                      Advertisement.image
                        ? `http://localhost:5000/${Advertisement.image}`
                        : "/cevic_img.jpg"
                    }
                    alt="Hatchback"
                    className="img-fluid m-2 rounded-2"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                </Col>
                <Col
                  xs={12}
                  md={8}
                  lg={9}
                  className="d-flex align-items-center m-0 p-0"
                >
                  <Card.Body className="m-0">
                    <Card.Title className="h4">{Advertisement.name}</Card.Title>
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
                    <Button
                      variant="success"
                      onClick={() =>
                        navigate(`/cardetails/${Advertisement._id}`)
                      }
                    >
                      More Details
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))
        ) : (
          <h3>NO CARS IN THIS CATEGORY</h3>
        )}
      </Container>
    </>
  );
}
