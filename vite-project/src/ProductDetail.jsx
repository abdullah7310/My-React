import './Product.css'
import Price from './Price'
export default function ProductDetail({title,description}){


    return(
        <div className="product-card">
            <p>{title}</p>
            <p>{description}</p>
            <Price/>
        </div>
    )
}