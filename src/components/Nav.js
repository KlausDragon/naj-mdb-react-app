import { NavLink } from "react-router-dom";
import Search from "./Search";

function Nav({ setShowNav }) {
  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Search />
        </li>
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
