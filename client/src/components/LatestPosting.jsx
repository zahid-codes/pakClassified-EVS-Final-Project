import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { PostAdData } from "../context/postAdContext";
import { useNavigate } from "react-router-dom";

export default function LatestPosting() {
  const { Advertisements } = PostAdData();
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-center text-success mt-3">Latest Posting</h2>
      <Container className="">
        <Row xs={1} sm={1} md={2} lg={3} className="g-5 mt-3">
          {Advertisements.map((Advertisement) => (
            <Col key={Advertisement._id}>
              <Card className="h-100">
                <Card.Img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  variant="top"
                  src={
                    Advertisement.image
                      ? `http://localhost:5000/${Advertisement.image}`
                      : "/cevic_img.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {Advertisement.name}
                  </Card.Title>
                  <Card.Text className="text-truncate">
                    {Advertisement.description}
                  </Card.Text>
                  <Button
                    onClick={() => navigate(`/cardetails/${Advertisement._id}`)}
                    variant="success"
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
