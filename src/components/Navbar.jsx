import '../CSS/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Navbar=()=>{
  return(
<div className='nav'>
<div className="logo-container">
  <img src="/images/logo.png" alt="PennyPath Logo" className="logo-icon" />
  <span className="logo-text">PennyPath</span>
</div>
<div className='account'>
<Link to="/">
    <button type="button" className="btn btn-outline-success">Home</button>
  </Link>
  <Link to="/signup">
    <button type="button" className="btn btn-outline-success">Sign up</button>
  </Link>
  <Link to="/login">
    <button type="button" className="btn btn-outline-success">Login</button>
  </Link>
</div>

</div>
  )
}
export default Navbar;
// btn btn-success