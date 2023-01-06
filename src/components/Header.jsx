import './Header.css'
import reactLogo from '../assets/react.svg'
// The Navbar component 
 function Header(){
    return(
        <div className="navbar">
        <div className="navimg">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h3> React Facts</h3>
        </div>
        <h5> React Course - Project 1</h5>
        </div>
    )
}

export default Header;