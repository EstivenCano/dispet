import logo from './logo.svg';
import './App.css';
import Main from '../src/components/Main'
import {Navbar, NavItem} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'white'}}>DisPet</h1>
      <h6 style={{color: 'grey'}}>Alimenta tu mascota</h6>
      <hr style={{backgroundColor:'white'}}/>
      <Main />
    </div>
  );
}

export default App;
