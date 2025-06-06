import { SearchContext } from "../SearchContext"
import { useContext } from "react"
import Alert from "./Alert"
import { useAlert } from "../AlertContext"
export default function Result() {
    const { showAlert } = useAlert()
    const { res } = useContext(SearchContext)
        const addToCart = (product) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                cartItem: [{
                    image: product.image, 
                    name: product.name, 
                    price: product.price, 
                    description: product.description
                }] 
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            showAlert([data[0], data[1]])
        }).catch((err) => {
            showAlert("Error", "Failed to add item to cart")
            console.log(err)
        })
    }
    return (
        <div className="clist">
            {res.length > 0 &&
                res.map((product, index) => (
                    <div className="icard" key={index}>
                        <img src={product.image} className="cimg" alt={product.name} />
                        <div className="pinfo">
                            <h3>{product.name}</h3>
                            <p className="price">Price: ₹{product.price}</p>
                            <p className="description">{product.description}</p>
                        </div>
                        <div className="a2cBtn">
                            <button 
                                className="p-1 w-[150px] rounded-[7px] bg-black text-white" 
                                onClick={ () => { 
                                    addToCart(product) 
                                }} >
                                    Add to Cart
                                </button>
                            <button className="p-1 w-[150px] rounded-[7px] bg-black text-white">Buy Now</button>
                        </div>
                    </div>
                ))}
                {alert.length > 0 && 
                    <Alert 
                        heading={alert[0]} 
                        message={alert[1]}  
                        onClose={() => {
                            showAlert("", "")
                        }} />}
        </div>
    )
}