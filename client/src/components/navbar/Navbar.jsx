import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"white", textDecoration:"none"}}><span className="logo">Somebooking</span></Link>
        {user ?  <div className="navItems">
          <span>{user.username}</span>
          <button className="navButton">Logout</button>
        </div> : <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar