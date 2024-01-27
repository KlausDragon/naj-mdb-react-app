import { NavLink } from "react-router-dom";

function Nav({ setShowNav }) {
  const closeNav = () => {
    setShowNav(false);
  };
  return (
    <nav>
      <ul>
        <li onClick={closeNav}>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
        <li onClick={closeNav}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
