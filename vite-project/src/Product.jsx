function Product({price}){
    return(
        <>
        <h3>these are the price</h3>
        <p>Price: {price}</p>
        {price>3000?<p>Discount 5%</p>:null}
        </>
    )
}

export default Product