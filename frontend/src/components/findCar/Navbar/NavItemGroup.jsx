import { NavItem } from "./NavItem";
export const NavItemGroup = () => {
  return (
    <>
      <NavItem destination="#services-section" navItemTitle="Our Services" />
      <NavItem destination="#why-us-section" navItemTitle="Why Us" />
      <NavItem destination="#testimonial-section" navItemTitle="Testimonial" />
      <NavItem destination="#faq-section" navItemTitle="FAQ" />
      <li className="nav-item">
        <a className="btn btn-custom fw-bold text-white" href="#">
          Register
        </a>
      </li>
    </>
  );
};

// export default NavItemGroup;
