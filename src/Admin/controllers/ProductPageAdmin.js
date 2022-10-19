import React, { useState,useContext } from 'react'
import { Link } from "react-router-dom";
import { productContext } from './CreateProduct.js'

function ProductPageAdmin(){
    //     const pd = {
    //     nameP : '',
    //     price : '',
    //     discount : '',
    //     category : '',
    //     color : '',
    //     kind : '',
    //     image : '',
    //     detail : '',
    //     date: ''
    // }
    // const [product,setProduct] = useState(pd)
    const sp = useContext(productContext)
    const [listProduct,setListProduct] = useState([])
    // console.log(listProduct)
    const createAProduct=(sp)=>{
        setListProduct(prev =>([...prev,sp]))
    }
    console.log(useContext(productContext))
    // console.log(listProduct)
        return(
    
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h2>SẢN PHẨM</h2>
                <h5>Fillter</h5>
                <Link to="/admin/product/createProduct">add</Link>
            </div>
        <div>
            <table className="list-product">
            <thead>
                <tr>
                    <th>Stt</th>
                    <th>Title</th>
                    <th>Cost</th>
                    <th>Discount</th>
                    <th>Caretory</th>
                    <th>Color</th>
                    <th>Kind</th>
                    <th>Detail</th>
                    <th>Date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
{/*            {                      
                 props.listProduct.map((item, index) => {
                    return(
                        <tr key= {item.nameP}>
                            <td>001</td>
                            <td>{item.nameP}</td>
                            <td>{item.price}</td>
                            <td>{item.discount}</td>
                            <td>{item.category}</td>
                            <td>{item.color}</td>
                            <td>{item.kind}</td>
                            <td>{item.image}</td>
                            <td>{item.detail}</td>
                            <td>{item.date}</td>
                            <td>edit</td>
                            <td>X</td>
                        </tr>
                    )
                })
            }*/}
            </tbody>
            </table>
           
        </div>
    </div>
)
}

export default ProductPageAdmin