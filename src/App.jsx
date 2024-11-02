import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Login from "./pages/login";


function App() {
  return (
    <>
    <Navbar/>
    <TopBar/>
    <Home/>
    {/* <Login/> */}
    <Footer />
    </>
  )
}

export default App;
