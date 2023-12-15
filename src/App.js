
//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import About from './component/About';
import Menu from './component/Menu'
import Contact from './component/Contact';
import Login from './layout/Login';

function App() {
  return (
    <div>
 
    <Navbar />
    <main>
    <div id='home'>
    <Home/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id="menu">
          <Menu/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
        <div id="login">
          <Login/>
        </div>

    </main>
 

</div>
  );
}

export default App;
