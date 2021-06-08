import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" exact>
          მთავარი გვერდი
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          ავტორიზაცია
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="register" className="nav-link">
          რეგისტრაცია
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
