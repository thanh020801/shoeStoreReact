import {Link}  from "react-router-dom";
function Taskbar(props){
	return (
	<>
       <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" 
            to="/" 
            >
                <div className="sidebar-brand-icon rotate-n-15">
                </div>
                <div className="sidebar-brand-text mx-3"><h5><strong>MEGA Store</strong></h5></div>
            </Link>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item active">
                <Link className="nav-link" to="/admin" 
                >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Product
            </div>

            <li className="nav-item">
                <Link  className="nav-link collapsed" to="/admin/product" 
                >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Create Product</span>
				</Link>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Fillter</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Select Fillter</h6>
                        <a className="collapse-item" href="utilities-color.html">Title</a>
                        <a className="collapse-item" href="utilities-border.html">Cost</a>
                        <a className="collapse-item" href="utilities-animation.html">Discount</a>
                        <a className="collapse-item" href="utilities-other.html">Color</a>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Addons
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
        </ul>
    </>
	)
}
export default Taskbar