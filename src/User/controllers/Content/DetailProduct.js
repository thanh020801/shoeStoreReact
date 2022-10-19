import i1 from '../../../styleSheet/images/sneaker/i1.jpg'
function DetailProduct(){
	return(
		<div className='infoProduct container'>
				<div className='row detail-product'>
					<div className='infoLeft col-md-6'>
						<img src={i1} /><br/>
						{/*<div>Đánh giá:
							<span className='star'>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
							</span><br/><br/>*/}
							<div className='buy'>
								<span className='Add'><button>Thêm vào giỏ</button></span>
								<span className='Buy'><button>Mua hàng</button></span>
							</div>
						{/*</div>*/}
					</div>
					<div className='infoRight col-md-5'>
						
						<div className='contents'>
							<div className='nameProduct'>Tên sản phẩm: Nhà hàng uy tín</div><br/>
							<div className='CostProduct'>Giá: 50.000.000đ</div><br/>
							<div className='Deltail'> 
							Loại giày: Sneaker<br/>
							Hãng giày: Bistis<br/>
							Màu sắc: Trắng đen<br/>
							Chi tiết: Được nhập khẩu từ Canada với chất liệu mềm mại sẽ làm hài lòng người sử dụng
							</div>
							<div className='dateUpload'>Ngày đăng: 17 tháng 2,2022</div>
						</div>
					</div>
				</div>
			</div>

	)
}

export default DetailProduct


// <div className="w3-display-topright"><i className="fa fa-close"></i></div>