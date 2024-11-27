import {
  faAngleRight,
  faLocationDot,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row } from "react-bootstrap";
import { PostAdData } from "../context/postAdContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { UserData } from "../context/userContext";
import Loader from "./Loader";

export default function CarDetails() {
  const { id } = useParams();
  const { Advertisement, GetAd } = PostAdData();
  const { user } = UserData();
  useEffect(() => {
    if (id) {
      GetAd(id);
    }
  }, [id]);

  return (
    <>
      {!Advertisement ? (
        <Loader />
      ) : (
        <>
          <div className="position-relative" style={{ height: "200px" }}>
            <img
              className="d-block w-100"
              src="/herosection_image_2.jpeg"
              alt="Featured Image"
              style={{ height: "100%", objectFit: "cover" }}
              parent
              container
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <div
              className="position-absolute top-50 start-25 translate-middle-y text-start text-white"
              style={{ paddingLeft: "100px" }}
            >
              <h1>Car Details</h1>
            </div>
          </div>
          <Container fluid className="mt-5">
            <Row>
              <Col lg={8}>
                <Row>
                  <Col lg={3}>
                    <div
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        padding: "10px",
                      }}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                        rounded
                        src={
                          Advertisement.image
                            ? `http://localhost:5000/${Advertisement.image}`
                            : "/cevic_img.jpg"
                        }
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <h3>{Advertisement.name}</h3>
                    <div className="mt-3">
                      <span>
                        <FontAwesomeIcon
                          className="me-1"
                          icon={faLocationDot}
                        />
                        {Advertisement.cityAreaId
                          ? Advertisement.cityAreaId.name
                          : "Location not available"}{" "}
                      </span>
                      <span className="ms-3">
                        <FontAwesomeIcon icon={faMoneyBill} />{" "}
                        {Advertisement.price}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <h2 className="mt-3">Car Description</h2>
                  <p className="">{Advertisement.description}</p>
                </Row>
              </Col>
              <Col lg={4}>
                <div
                  className="bg-success rounded  p-4 text-align-center align-item-center"
                  style={{ height: "350px" }}
                >
                  <h2 className="text-white">Advertisement Summary</h2>
                  <ul className="text-white mt-4 list-unstyled">
                    <li className="mt-2">
                      <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                      Posted by:{" "}
                      {Advertisement.postedById
                        ? Advertisement.postedById.name
                        : "Name not available"}{" "}
                    </li>
                    <li className="mt-2">
                      <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                      Posted Date:{" "}
                      {new Date(Advertisement.startsOn).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </li>
                    <li className="mt-2">
                      <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                      Advertisement Location:{" "}
                      {Advertisement.cityAreaId
                        ? Advertisement.cityAreaId.name
                        : "Location not available"}{" "}
                    </li>
                    <li className="mt-2">
                      <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                      Price: {Advertisement.price}
                    </li>
                    <li className="mt-2">
                      <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                      Contact: {user.contactNumber}
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
