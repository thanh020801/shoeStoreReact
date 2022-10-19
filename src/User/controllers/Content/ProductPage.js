import {Link } from "react-router-dom";
import i1 from '../../../styleSheet/images/sneaker/i1.jpg'
function ProductPage(){
	return(
	<div className='container'>
		<div className="row ">
		    <div className="col-sm-12 col-lg-12">
		    	<div className="title-content"><h3>Sneaker</h3></div>
		    	<div className="row item-3">
					<div className="card col-sm-4 col-lg-4" >
					  <img src={i1} className="card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title">Giay sneaker sieu dep</h5>
					    <p className="card-text">200.000.000d</p>
					    <Link to="/product/detail" className="btn btn-primary">Buy</Link>
					  </div>
					</div>

					<div className="card col-sm-4 col-lg-4" >
					  <img src={i1} className="card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title">Hoa lyly</h5>
					    <p className="card-text">200.000.000d</p>
					    <a href="#" className="btn btn-primary">Buy</a>
					  </div>
					</div>

					<div className="card col-sm-4 col-lg-4" >
					  <img src={i1} className="card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title">Hoa lyly</h5>
					    <p className="card-text">200.000.000d</p>
					    <a href="#" className="btn btn-primary">Buy</a>
					  </div>
					</div>
					<div className="card col-sm-4 col-lg-4" >
					  <img src={i1} className="card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title">Hoa lyly</h5>
					    <p className="card-text">200.000.000d</p>
					    <a href="#" className="btn btn-primary">Buy</a>
					  </div>
					</div>
					<div className="card col-sm-4 col-lg-4" >
					  <img src={i1} className="card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title">Hoa lyly</h5>
					    <p className="card-text">200.000.000d</p>
					    <a href="#" className="btn btn-primary">Buy</a>
					  </div>
					</div>
					<div className="card col-sm-4 col-lg-4" >
					  <img src={i1} className="card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title">Hoa lyly</h5>
					    <p className="card-text">200.000.000d</p>
					    <a href="#" className="btn btn-primary">Buy</a>
					  </div>
					</div>
		    	</div>
		    </div>
		</div>
	</div>

	)
}

export default ProductPage