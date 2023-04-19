  import logo from './logo.svg';
  import './App.css';
  import { Fragment } from 'react';

  function App() {
    return (
      <Fragment>

    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Benfits useing react...</h1>
          <ol>
                <li>component-based architecture</li>
                <li>virtual DOM for efficient updates</li>
                <li>Rich ecosystem and community</li>
                <li>cross-platform development</li>
                <li>strong community support</li>    
          </ol>
    <button>Get Started..</button>
          
        </header>
      </div>
      </Fragment>
    );
  }

  export default App;
