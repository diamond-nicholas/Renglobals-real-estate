import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact-us/Contact';
import Terms from './Pages/T&C/Terms';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/t&c' element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
