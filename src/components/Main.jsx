// The home page Component
import './Main.css';

function Main(){
    return(
        <div className="home">
            <h1>Fun Facts about React</h1>
        <ul className="facts">
            <li>Was first Realesed in 2013 </li>
            <li>Was originally createdd by Jordan Walke </li>
            <li>Has well over 100K stars on Github </li>
            <li>Is maintained by Facebook </li>
            <li>Powers thousads of enterprise apps, including mobile apps </li>

        </ul>
        </div>
    );
}

export default Main;