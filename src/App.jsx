
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import Moviecard from './Components/Moviecard/Moviecard';
import Cart from './Components/Cart/Cart';
import Navbarfun from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbarfun/>
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route index path='/Moviecard' element={<Moviecard/>}/>
      <Route index path='/favoriteMovie' element={<Cart/>}/>
     </Routes>
     
    </div>
    </Provider>
  );
}

export default App;
