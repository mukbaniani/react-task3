import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';

function Navigation() {
  const authed = useSelector(authSelector);
  return (
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" exact>
          მთავარი გვერდი
        </NavLink>
      </li>
      {!authed ? (
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            ავტორიზაცია
          </NavLink>
        </li>
      ) : null}
      {!authed ? (
        <li className="nav-item">
          <NavLink to="/register" className="nav-link">
            რეგისტრაცია
          </NavLink>
        </li>
      ) : null}
      {authed ? (
        <li className="nav-item">
          <NavLink to="/pictures" className="nav-link">
            სურათები
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
}

export default Navigation;
