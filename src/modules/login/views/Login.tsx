import 'regenerator-runtime/runtime';
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
      <Spotlight></Spotlight>
      <Footer></Footer>
    </>
  );
}
