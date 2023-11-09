import { NavItemGroup } from "./NavItemGroup";

export const Nav = () => {
  return (
    <div
      className="collapse navbar-collapse d-lg-flex justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <NavItemGroup />
      </ul>
    </div>
  );
};

// export default Nav;
