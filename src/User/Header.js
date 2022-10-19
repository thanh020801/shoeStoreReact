import { Link } from "react-router-dom";
// import '../../styleSheet/Header.css'
function Header(){
	return(
	    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
	        <Link to="/admin" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
	        	<h4>MEGA Store</h4>
	        </Link>
	        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
		        <li><Link className="nav-link px-2 link-secondary" to='/' >Home</Link></li>
		        <li><Link className="nav-link px-2 link-dark"  to='/product' >Sản phẩm</Link></li>
		        <li><Link className="nav-link px-2 link-dark"  to='/contact' >Liên hệ</Link></li>
		        <li><Link className="nav-link px-2 link-dark"  to='/cart' >Giỏ hàng</Link></li>
	        </ul>
	        <div className="col-md-3 text-end">
		       <Link to='/login'><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
	        </div>
    </header>

	)
}
export default Header