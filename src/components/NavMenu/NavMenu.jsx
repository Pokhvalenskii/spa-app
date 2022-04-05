import './NavMenu.css'
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();

  console.log('LOCATION', location.pathname)
  return (
    <div className="navMenu">
      {location.pathname !== '/signin' && <Link className="navMenu__item" to='/signin'>/signin</Link>}
      {location.pathname !== '/signup' && <Link className="navMenu__item" to='/signup'>/signup</Link>}
      {location.pathname !== '/' && <Link className="navMenu__item" to='/'>/home</Link>}
    </div>
  )
}

export default NavMenu;