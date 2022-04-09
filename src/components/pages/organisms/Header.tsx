import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
    <div className="header">
      <nav>
        <div className="nav-wrapper teal accent-4">
          <Link to="#" className="brand-logo">Progate Clone with React</Link>
          <Link to="#mobile-menu" className="sidenav-trigger" data-activates="mobile-menu">
            <i className="material-icons"  data-target="mobile-menu">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="#">My Page</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
        <ul className="sidenav grey light-2" id="mobile-menu">
           <Link to="/mypage"><li>マイページ</li></Link>
           <li><Link to="/login">ログイン</Link></li>
           <li><Link to="/logout">ログアウト</Link></li>
         </ul>
      </nav>
  </div>
    </>
  )
}
