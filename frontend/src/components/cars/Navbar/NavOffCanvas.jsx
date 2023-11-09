import { NavItemGroup } from "./NavItemGroup";
export const NavOffCanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end d-lg-none"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          BCR
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <NavItemGroup />
        </ul>
      </div>
    </div>
  );
};

// export default NavOffCanvas;
