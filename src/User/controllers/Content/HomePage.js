// import '../../styleSheet/Header.css'
import i1 from '../../../styleSheet/images/sneaker/i13.png'
function HomePage(){
	return(
		<div className='container'>
			<div className="title-content"><h3>Sneaker</h3></div>
			<div className="row item-1">
				<div className="col-sm-6 col-lg-6 item-1-img">
					<img src={i1} className="card-img-top" alt="..."/>
				</div>
				<div className="col-sm-5 col-lg-5 item-1-content" >
					<h3>Giày phù hợp mọi lứa tuổi</h3>
					<p>Được sản suất vào năm 2022 là hot trend trong thời điểm hiện tại</p>
					<a href="/" className="btn btn-primary">Săn ngay</a>
				</div>
			</div>


			<div className="title-content"><h3>Sneaker</h3></div>
			<div className="row item-1">
				<div className="col-sm-6 col-lg-6 item-1-img">
					<img src={i1} className="card-img-top" alt="..."/>
				</div>
				<div className="col-sm-5 col-lg-5 item-1-content" >
					<h3>Giày phù hợp mọi lứa tuổi</h3>
					<p>Được sản suất vào năm 2022 là hot trend trong thời điểm hiện tại</p>
					<a href="/" className="btn btn-primary">Săn ngay</a>
				</div>
			</div>
		</div>
	)
}

export default HomePage
