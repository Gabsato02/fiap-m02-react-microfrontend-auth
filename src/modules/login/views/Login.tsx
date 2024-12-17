import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import RegisterModal from "../components/RegisterModal";
import Spotlight from "../components/Spotlight";

export default function Login(props) {
  return (
    <>
      <Nav></Nav>
      <LoginModal></LoginModal>
      <RegisterModal></RegisterModal>
      <main className="vh-100">
        <Spotlight></Spotlight>
        <Footer></Footer>
      </main>
    </>
  );
}
