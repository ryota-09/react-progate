import { Link, useHistory } from "react-router-dom";
import Cookie from "universal-cookie";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

const cookie = new Cookie();

export const Header = () => {
  const { setUserState } = useCurrentUser();
  const history = useHistory();

  const signOut = () => {
    cookie.remove("access_token");
    setUserState({
      type: "SET_CURRENT_USER",
      payload: {
        currentUser: {
          username: "",
          avatar: "",
          remarks: "",
          beginnerStatus: false,
          htmlStatus: false,
          tsStatus: false,
        },
      },
    });
    history.push("/login")
  };

  return (
    <>
      <div className="header">
        <nav>
          <div className="nav-wrapper teal accent-4">
            <Link to="#" className="brand-logo">
              &nbsp;&nbsp;Progate Clone with React
            </Link>
            <Link
              to="#mobile-menu"
              className="sidenav-trigger"
              data-activates="mobile-menu"
            >
              <i className="material-icons" data-target="mobile-menu">
                menu
              </i>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="myPage">My Page</Link>
              </li>
              <li>
                <Link to="registerUser">Sign Up</Link>
              </li>
              <li>
                <Link to="login">Sign In</Link>
              </li>
              <li onClick={signOut}>Sign Out</li>
            </ul>
          </div>
          <ul className="sidenav grey light-2" id="mobile-menu">
            <Link to="/mypage">
              <li>マイページ</li>
            </Link>
            <li>
              <Link to="/login">ログイン</Link>
            </li>
            <li>
              <Link to="/logout">ログアウト</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
