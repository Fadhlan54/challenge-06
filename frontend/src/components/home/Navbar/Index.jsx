import Logo from "/img/logo.svg";
import { NavOffCanvas } from "./NavOffCanvas";
import { Nav } from "./Nav";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#F1F3FF" }}
    >
      <div className="container-lg py-2 mx-auto">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavOffCanvas />

        <Nav />
      </div>
    </nav>
  );
};

export default Navbar;
