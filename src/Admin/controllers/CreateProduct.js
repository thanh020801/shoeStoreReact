import React, {useState, createContext}  from 'react'
import { Link } from "react-router-dom";

export const productContext = createContext()
console.log(productContext)

function CreateProduct() {
	const valDiscount=[{value:0 },{value:10 },{value:15 },{value:20 },]
	const today = new Date()
	const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	
	// const valDiscount=[{value:0 },{value:10 },{value:15 },{value:20 },]
	// const valDiscount=[{value:0 },{value:10 },{value:15 },{value:20 },]
	// const valDiscount=[{value:0 },{value:10 },{value:15 },{value:20 },]
	const pd = {
		nameP : '',
		price : '',
		discount : valDiscount[0].value,
		category : 'Sneaker',
		color : 'blue',
		kind : 'Sneaker',
		image : '',
		detail : '',
		date: today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
	}
	const [product,setProduct] = useState(pd)
	// console.log(product)
	const handleSubmit = (event)=>{
		const { name,value } = event.target
		if( product.nameP === '' || product.price === '' ){
			alert('Chưa nhập đủ thông tin.')
		}
		else{
			// props.createAProduct({
			// 	nameP : product.nameP,
			// 	price : product.price,
			// 	discount : product.discount,
			// 	category : product.category,
			// 	color :product.color,
			// 	kind : product.kind,
			// 	image : product.image,
			// 	detail : product.detail,
			// 	date : product.date
			// })
			alert('Thêm sản phẩm thành công')
			setProduct({
				nameP : '',			price : '',			discount : '',
				category : '',		color : '',			kind : '',
				image : '',			detail : '',
			})
			// console.log(product)

		}
	}
		const handleChange = (event) => {
			const { name,value } = event.target
	      	setProduct(prev => ({ ...prev, [name]: value }))
	      
  		}
	
		// console.log(props.createAProduct)

  	
		return(




<productContext.Provider value={product}>
	<form className="crud_product col-md-12">
		<div className="from-title row">
			<div className='col-md-11'><h2>THÊM SẢN PHẨM</h2></div>
			<div className='col-md-1'><Link to='/admin/product'><span>trở về</span></Link></div>
		</div>
		<div className="form-row">
			<div className="form-group col-md-6">
			    <label htmlFor="nameP">Tên Sản phẩm</label>
			    <input type="text" className="form-control" id="nameP" name='nameP'
			    placeholder="Nhập tên sản phẩm"  value={product.nameP}
			    onChange={(event) =>handleChange(event)} required/>
			</div>
			<div className="form-group col-md-6">
			    <label htmlFor="price">Giá thành</label>
			    <input type="number" className="form-control" id="price" name='price'
			    placeholder="VNĐ" value={product.price}  
			    onChange={(event) =>handleChange(event)} required/>
			</div>
		</div>


		<div className="form-row">
			<div className="form-group col-md-3">
			    <label htmlFor="discount">Giảm giá</label>
			    <select id="discount" className="form-control" name='discount'
			   		value={product.discount} onChange={(event) =>handleChange(event)}
			   		
			   	>
					
			      	{valDiscount.map((option) => (
              			<option key={option.value} value={option.value}>{option.value}%</option>
            		))}
				</select>
			</div>


			<div className="form-group col-md-3">
			    <label htmlFor="category">Phân loại</label>
			    <select id="category" className="form-control" name='category'
			    value={product.category} onChange={(event) =>handleChange(event)}>
			      	<option value='Bitis'>Bitis</option>
			      	<option value='Vans'>Vans</option>
			      	<option value='Sneaker'>Sneaker</option>
			      	<option value='Thể thao'>Thể thao</option>
			      	<option value='Patin'>Patin</option>
			      	<option value='Dự tiệc'>Dự tiệc</option>
			    </select>
			</div>


		    <div className="form-group col-md-3">
		        <label htmlFor="color">Màu sắc</label>
		 	    <select id="color" className="form-control" name='color'
		 	    value={product.color} onChange={(event) =>handleChange(event)}>
			      	<option value='Blue'>Cam</option>
			      	<option value='Đỏ'>Đỏ</option>
			      	<option value='Vàng'>Vàng</option>
			      	<option value='Nâu'>Nâu</option>
			      	<option value='Tím'>Tím</option>
			      	<option value='Hồng'>Hồng</option>
			    </select>
			</div>


		    <div className="form-group col-md-3">
			    <label htmlFor="kind">Thương hiệu</label>
				<select id="kind" className="form-control" name='kind'
				value={product.kind} onChange={(event) =>handleChange(event)}>
			        <option value='Bistis'>Sneaker</option>
			        <option value='Vans'>Vans</option>
			    </select>
		    </div>
		</div>

		    <div className="form-group col-md-6">
		      <label htmlFor="image">Ảnh đại diện</label>
		      <input type="file" className="form-control" id="image" name='image'
		      value={product.image} onChange={(event) =>handleChange(event)}/>
		    </div>
		


		 	<div className="form-group">
	        	<label className="form-check-label" htmlFor="gridCheck">Thông tin chi tiết sản phẩm</label><br/>
	        	<textarea placeholder="Mời bạn nhập" 
	        		className="form-control col-md-12" 
	        		id="detail"
	        		name='detail'
	        		onChange={(event) =>handleChange(event)}
	        		value={product.detail} required>
	        	</textarea>
		    </div>
		    <div className="col-md-3">
		  		<span className="btn btn-primary col-md-12" 
		  		onClick={(event) => handleSubmit(event)}>Hoàn Thành</span>
		    </div>
		</form>	
</productContext.Provider>
)}

export default CreateProduct