  import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import AppRouter from "./components/AppRouter";
  import Images from "./components/Images";
  import FooterBar from "./components/FooterBar";
  import Navigation from "./components/Navigation";

function App() {

  return (
    <div>
        <Navigation />

        <Images />

        <AppRouter />

        <FooterBar />
    </div>
  );
}

export default App
