import { Outlet } from "react-router-dom";
import React, {useState,createContext}  from 'react'
import Header from './Header'
import Taskbar from './Taskbar'
import Managers from './controllers/Managers'

const listProductContext = createContext()

function IndexAdmin(){
	// const pd = {
	// 	nameP : '',
	// 	price : '',
	// 	discount : '',
	// 	category : '',
	// 	color : '',
	// 	kind : '',
	// 	image : '',
	// 	detail : '',
	// }
	// const [url,setUrl] = useState('');
	// const setUrlShowHide=(path)=>{
	// 	setUrl( url = path)
	// }

	const [listProduct,setListProduct] = useState([])
	// console.log(listProduct)
	const createAProduct=(product)=>{
		setListProduct(prev =>([...prev,product]))
	}


	// console.log(listProduct)
	// console.log(listProduct)

	// console.log(setListProduct)

	return(
		<listProductContext.Provider value={listProduct}>
			<div id="page-top">
				<div id="wrapper">
					<Taskbar
						// setUrl = {setUrl}
					/>
					<div id="content-wrapper" className="d-flex flex-column">
			            <div id="content">
							<Header/>
						{/*	<Outlet 
							/>	*/}
							<Managers.DashboardPage/>

							<Managers.CreateProduct  
								createAProduct = {createAProduct}
							/>	
							<Managers.ProductPageAdmin 
								listProduct = {listProduct}
							/>
						</div>
					</div>
				</div>
			</div>
		</listProductContext.Provider>
	)}

export default IndexAdmin