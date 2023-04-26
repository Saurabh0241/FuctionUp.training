

import './App.css';
import { Productcard } from './Components/productcard';
import { Fragment } from 'react';

function App() {


  const product1 = {
    productPic: "https://tse4.mm.bing.net/th?id=OIP.5DkTfmZhmkb34y6tzbb4fAHaE_&pid=Api&P=0",
    id: "1234",
    productName: " Air Jorden",
    Brand: "Nike",
    productDescription: "This shoe is Air Jorden very much trending.",
    Price: "$65",
    Rating: "4.5"

  }

  const product2 = {
    productPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBq0v4aYt67mjjPO8f-8pSd4Zhn2tzgWbqqHZhV-w&s",
    id: "1234",
    productName: " Johnson ",
    Brand: "Nike",
    productDescription: "This Johnson watch is very  much trending",
    Price: "$85",
    Rating: "4.5"
  }

  const product3 = {
    productPic: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    id: "1234",
    productName: "boAt Headphones",
    Brand: "Nike",
    productDescription: "This Headphones is very much   trending.",
    Price: "$65",
    Rating: "4.5"
  }

  const product4 = {

    productPic: "https://cdn.shopify.com/s/files/1/0490/6011/8686/products/CVC-Sunscreen.jpg?v=1665755509",
    id: "1234",
    productName: " Sunscreen",
    Brand: "Nike",
    productDescription: "This Sunscreen is very much trending.",
    Price: "$65",
    Rating: "4.5"
  }

  const product5 = {
    productPic: "https://tse2.mm.bing.net/th?id=OIP.m26yupS4vCSbyhAo32Ni2gHaFN&pid=Api&P=0",
    id: "1234",
    productName: " Nike ",
    Brand: "Nike",
    productDescription: "This nike shoe is very much trending.",
    Price: "$65",
    Rating: "4.5"
  }


  function productalert1() {
    alert("product details "+ product1.productName)
  }
  function productalert2() {
    alert("product details "+ product2.productName)
  }
  function productalert3() {
    alert("product details "+ product3.productName)
  }
  function productalert4() {
    alert("product details "+ product4.productName)
  }
  function productalert5() {
    alert("product details "+ product5.productName)
  }

  const card1 = {
    background: 'orange'
  }


  const card2 = {
    background: 'blue'
  }


  const card3 = {
    background: 'green'
  }


  const card4 = {
    background: 'red'
  }

  const card5 = {
    background: 'yellow'
  }

  return (

    <Fragment>
      <div className='child_container'>

        <Productcard
          productDetails={product1}
          alertfun={productalert1}
          button={card1}

        />
        <Productcard
          productDetails={product2}
          alertfun={productalert2}
          button={card2}

        />
        <Productcard
          productDetails={product3}
          alertfun={productalert3}
          button={card3}
        />
        <Productcard
          productDetails={product4}
          alertfun={productalert4}
          button={card4}
        />
        <Productcard
          productDetails={product5}
          alertfun={productalert5}
          button={card5}
        />
      </div>
    </Fragment>
  );
}

export default App;