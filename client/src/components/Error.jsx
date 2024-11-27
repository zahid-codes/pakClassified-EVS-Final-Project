import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div
        className="d-flex flex-column  justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>
          Invalid Url <FontAwesomeIcon icon={faGhost} fade />
        </h1>

        <Button as={Link} to="/home" className="btn btn-success ">
          Back to home
        </Button>
      </div>
    </>
  );
}
