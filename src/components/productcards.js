
import React from 'react'
import './productcard.css'



const Productcard = ({ data }) => {


    const myList = () => {
        return data.map((item, index) => {


            return (
                (
                    <div key={index} className='card'>
                        <div className='card2'>
                            <img src={item.productPic} />
                            <h3 className="name">{item.productName}</h3>
                            <p className="description">{item.productDescription}</p>
                            <h3 className="price">{item.Price}</h3>
                            <p className="rating">{item.Rating}</p>
                            <div className='btn'onClick={()=> alert(item.alert)}>ADD TO CART</div>
                        </div>

                    </div>
                )
            )
        })
    }

        return (
            <div className='list'>
                {myList()}
            </div>
        )
    

}
export default Productcard