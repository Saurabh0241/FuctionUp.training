  import logo from './logo.svg';
  import './App.css';
  import { Fragment } from 'react';
  import { Button } from './Button/button';
  import { Benfits } from './Benifits/benifits';
  
  
  function App() {
    return (
      <Fragment>
      <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
           <Benfits/>
           <Button/>
        </header>
      </div>
      </Fragment>
    );
  }

  export default App;
