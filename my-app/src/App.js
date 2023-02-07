import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js"
import Game1 from './components/game1';
import Game2 from './components/game2';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header d-flex flex-row  ">
        <Game1 />
        <Game2 />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      
         
      
    </div>
  );
}

export default App;
