import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './views/home/Home'
import Blog from './views/blog/Blog'
import Tools from './views/tools/Tools'
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigator/Navigation';
import About from './views/about/About';


function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/tools" element={<Tools/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </>   
  );
}

export default App;
