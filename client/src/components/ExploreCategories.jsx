import { Card, Col, Container, Row } from "react-bootstrap";
import { categoriesData } from "../context/categoriesContext";
import { PostAdData } from "../context/postAdContext";
import { useNavigate } from "react-router-dom";

export default function ExploreCategories() {
  const navigate = useNavigate();
  const { categories } = categoriesData();
  const { Advertisements } = PostAdData();
  const getCategoryAds = (categoryId) => {
    return Advertisements.filter((ad) => ad.categoryId?._id === categoryId);
  };

  const handleClick = (id) => {
    navigate(`/categories/${id}`);
  };
  return (
    <>
      <h2 className="text-center text-success mt-3">Explore By Categories</h2>

      <Container className="">
        <Row className="g-4 mt-3 mb-3" xs={1} sm={2} md={3} lg={4}>
          {categories.map((category) => {
            const adsInCategory = getCategoryAds(category._id);
            const FirstAdImg = adsInCategory[0]?.image;
            return (
              <Col
                style={{ cursor: "pointer" }}
                key={category._id}
                onClick={() => handleClick(category._id)}
              >
                <Card className="h-100">
                  <Card.Img
                    className="border-bottom"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src={
                      FirstAdImg
                        ? `http://localhost:5000/${FirstAdImg}`
                        : "/no-car-img.jpg"
                    }
                  />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {category.name}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {adsInCategory.length < 1
                        ? "No cars in this category"
                        : `${adsInCategory.length} Cars`}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
