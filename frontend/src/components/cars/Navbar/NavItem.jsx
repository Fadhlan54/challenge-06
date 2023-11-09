export const NavItem = ({ navItemTitle, destination }) => {
  return (
    <li className="nav-item mx-1">
      <a className="nav-link active" aria-current="page" href={destination}>
        {navItemTitle}
      </a>
    </li>
  );
};

// export default NavItem;
