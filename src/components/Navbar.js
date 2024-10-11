import '../styles/Navbar.css'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            Nelayan.Id
        <ul>
          <li>
          <Link to ="/" className="navbar-link">Home</Link>
          {/* Home */}
          </li>
          <li>
          {/* <Link to ="/*" className="navbar-link">Product</Link> */}
          Product
          </li>
          <li>
          {/* <Link to ="/Home" className="navbar-link">About Us</Link> */}
          About Us
          </li>
          <li>
          <Link to ="/Login" className="navbar-link">Join Us</Link>
          </li>
        </ul>
       </div>
    );


}

export default Navbar;
