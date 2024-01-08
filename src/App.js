import Navbar from "./components/Navbar";
import "../src/App.css"


const App = () => {
    return (<header>
        <div className = "nav-area" >
        <a href = "/#"
        className = "logo" >
        Mega-menu
        </a> 
        <Navbar />
        </div>
        </header>
    );
};

export default App;