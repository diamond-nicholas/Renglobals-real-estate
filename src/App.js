import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact-us/Contact';
import Terms from './Pages/T&C/Terms';
import Elite from './Pages/ElitePlans/Elite';
import HotDeals from './Pages/HotDeals/HotDeals';
import Housing from './Pages/Housing/Housing';
import Estate from './Pages/Estates/Estate';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/t&c' element={<Terms />} />
        <Route path='/elite' element={<Elite />} />
        <Route path='/hotdeals' element={<HotDeals />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='/estate' element={<Estate />} />
      </Routes>
    </Router>
  );
}

export default App;
