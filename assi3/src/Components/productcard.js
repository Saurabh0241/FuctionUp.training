import './productcard.css'

export function Productcard({ productDetails, alertfun, button }) {


    const
 { productId, productPic, productName, Brand, productDescription, Price, Rating, } = productDetails


    return (

        <div className='card'>
            <div className='card2'>
                <img src={productPic} />
                <h3 className="name">{productName}</h3>
                <p className="description">{productDescription}</p>
                <h3 className="price">{Price}</h3>
                <p className="rating">{Rating}</p>
                <button className="btn" onClick={alertfun} style={button}>Add to Cart</button>
            </div>

        </div>
    )

}