import { Button, Carousel } from "react-bootstrap";
import PostAdvertisementForm from "./PostAdvertisementForm";

export default function HeroSection({ onSearchClick }) {
  return (
    <>
      <Carousel>
        <Carousel.Item className="position-relative">
          <img
            className="d-block w-100 carousel-image "
            src="/herosection_image_1.jpg"
            alt="First slide"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <Carousel.Caption className="position-absolute top-25 start-25 translate-middle-y text-center text-sm-start">
            <h3>
              Shift Into Gear:
              <br /> Your Destination <br />
              for Car Excellence
            </h3>
            <p>Drive Your Dream: Find Your Perfect Car Today</p>

            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start">
              <Button
                onClick={onSearchClick}
                className="me-3 p-2 mx-2 btn btn-dark mb-3 mb-sm-0"
              >
                Search a Car
              </Button>
              <PostAdvertisementForm />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <img
            className="d-block w-100 carousel-image "
            src="/herosection_image_2.jpeg"
            alt="Second slide"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <Carousel.Caption className="position-absolute top-25 start-25 translate-middle-y text-center text-sm-start">
            <h3>
              Unlock Your Drive:
              <br /> Explore, Compare <br />
            </h3>
            <p>Where Every Journey Begins With The Right Car</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start">
              <Button
                onClick={onSearchClick}
                className="me-3 btn btn-dark p-2 mx-2 mb-3 mb-sm-0"
              >
                Search a Car
              </Button>
              <PostAdvertisementForm />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
