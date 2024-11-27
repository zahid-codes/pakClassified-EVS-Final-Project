import HeroSection from "./HeroSection";
import SearchBar from "./SerachBar";
import ExploreCategories from "./ExploreCategories";
import LatestPosting from "./LatestPosting";
import { useEffect, useRef } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { UserData } from "../context/userContext";
export default function Home() {
  const { user, setShowToast, showToast, toastMessage, setToastMessage } =
    UserData();
  useEffect(() => {
    if (showToast) {
      setToastMessage(`Welcome back ${user.name && user.name} 🎉`);
    }
  }, [setToastMessage]);
  const SearchRef = useRef(null);
  const ScrollToSearch = () => {
    if (SearchRef.current) {
      SearchRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  };

  return (
    <>
      <HeroSection onSearchClick={ScrollToSearch} />
      <div ref={SearchRef}>
        <SearchBar />
      </div>
      <ExploreCategories />
      <LatestPosting />
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          bg="success"
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white fw-bold">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
