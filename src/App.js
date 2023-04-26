import './App.css';
import Productcard from './components/productcards';
import React from 'react';


const  data = [{
  productPic: "https://tse4.mm.bing.net/th?id=OIP.5DkTfmZhmkb34y6tzbb4fAHaE_&pid=Api&P=0",
  productName: " Air Jorden",
  productDescription: "This shoe is Air Jorden very much trending.",
  Price: "$65",
  Rating: "4.5",
  alert : "product1"

},
{
  productPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBq0v4aYt67mjjPO8f-8pSd4Zhn2tzgWbqqHZhV-w&s",
  productName: " Johnson ",
  productDescription: "This Johnson watch is very  much trending",
  Price: "$85",
  Rating: "4.5",
  alert : "product2"
},

{
  productPic: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  productName: "boAt Headphones", 
  productDescription: "This Headphones is very much   trending.",
  Price: "$65",
  Rating: "4.5",
  alert : "product3"
},
{

  productPic: "https://cdn.shopify.com/s/files/1/0490/6011/8686/products/CVC-Sunscreen.jpg?v=1665755509",
  productName: " Sunscreen",
  productDescription: "This Sunscreen is very much trending.",
  Price: "$65",
  Rating: "4.5",
  alert : "product4"
},
{
  productPic: "https://tse2.mm.bing.net/th?id=OIP.m26yupS4vCSbyhAo32Ni2gHaFN&pid=Api&P=0",
  productName: " Nike ",
  productDescription: "This nike shoe is very much trending.",
  Price: "$65",
  Rating: "4.5",
  alert : "product5"
}];

function App() {
  return (
    <div className="App">
      <Productcard data={data}/>
    </div>
  );
}
export default App