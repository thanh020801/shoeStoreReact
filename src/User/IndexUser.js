import Header from './Header'
import Footer from './Footer'
import Managers from './controllers/Content/Managers'

function HomePage(){
	return(
	<>
		<Header/>
	        <Managers.HomePage/>
        <Footer/>
	</>
	)
}
function CartPage(){
	return(
	<>
		<Header/>
	        <Managers.CartPage/>
        <Footer/>
	</>
	)
}
function ContactPage(){
	return(
	<>
		<Header/>
	        <Managers.ContactPage/>
        <Footer/>
	</>
	)
}
function DetailProduct(){
	return(
	<>
		<Header/>
	        <Managers.DetailProduct/>
        <Footer/>
	</>
	)
}
function ProductPage(){
	return(
	<>
		<Header/>
	        <Managers.ProductPage/>
        <Footer/>
	</>
	)
}
export default {HomePage,ContactPage,CartPage,ProductPage,DetailProduct}