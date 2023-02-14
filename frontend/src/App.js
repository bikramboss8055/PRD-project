// import logo from './logo.svg';
// import './App.css';
import Category from './components/Category';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import AllRoutes from './routes/AllRoutes';
import Sliders from './components/Sliders';
import SingleProduct from './components/SingleProduct';


function App() {
  return (
    <div className="App">
     <AllRoutes/>
    {/* <Navbar/>
     <SingleProduct/>
     <Footer/> */}
    </div>
  );
}

export default App;
