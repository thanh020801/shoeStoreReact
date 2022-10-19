// import '../../styleSheet/Header.css'
function Footer(){
	return(
		<footer className="py-5">
		    <div className="row">
		      <div className="col-3">
		        <h5>Sản phẩm</h5>
		        <ul className="nav flex-column">
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Snaeker</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nike</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Superme</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Balenciaga</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Jordan</a></li>
		        </ul>
		      </div>

		      <div className="col-3">
		        <h5>Sản phẩm</h5>
		        <ul className="nav flex-column">
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Puma</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">New Balance</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Converse</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Vans</a></li>
		          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bitis</a></li>
		        </ul>
		      </div>

		      <div className="col-4 offset-1">
		        <form>
		          <h5>Subscribe to our newsletter</h5>
		          <p>Monthly digest of whats new and exciting from us.</p>
		          <div className="d-flex w-100 gap-2">
		            <label forhtml="newsletter1" className="visually-hidden">Email address</label>
		            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
		            <button className="btn btn-primary" type="button">Subscribe</button>
		          </div>
		        </form>
		      </div>
		    </div>

		    <div className="d-flex justify-content-between py-4 my-4 border-top">
		      <p>&copy; 2021 Company, Inc. All rights reserved.</p>
		      <p>Sản phẩm chỉ mang tính chất học tập vui lòng đừng đánh bản quyền tội nghiệp em !!!</p>
		    </div>
  		</footer>

	)
}

export default Footer