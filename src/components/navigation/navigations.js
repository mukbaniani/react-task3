import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import { setAuthGuestAction } from '../../redux/actions/AuthAction';
import * as routes from '../../utils/routePaths';
import { AUTH_TOKEN } from '../../utils/constants';

function Navigation() {
  const authed = useSelector(authSelector);
  const history = useHistory();
  const dispath = useDispatch();

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispath(setAuthGuestAction());
    history.replace(routes.HOME_PATH);
  };
  return (
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <NavLink to={routes.HOME_PATH} className="nav-link" exact>
          მთავარი გვერდი
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={routes.FAKER_COMPANY_PATH} className="nav-link">
          კომპანიები
        </NavLink>
      </li>
      {!authed ? (
        <li className="nav-item">
          <NavLink to={routes.LOGIN_PATH} className="nav-link">
            ავტორიზაცია
          </NavLink>
        </li>
      ) : null}
      {!authed ? (
        <li className="nav-item">
          <NavLink to={routes.REGISTER_PATH} className="nav-link">
            რეგისტრაცია
          </NavLink>
        </li>
      ) : null}
      {authed ? (
        <li className="nav-item">
          <NavLink to={routes.IMAGES_PATH} className="nav-link">
            სურათები
          </NavLink>
        </li>
      ) : null}
      {authed ? (
        <button className="btn btn-dark" onClick={() => logout()}>
          logout
        </button>
      ) : null}
    </ul>
  );
}

export default Navigation;
