
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
function App() {
  return (

    <BrowserRouter>
      <Routes>
  <Route path='/' element={<Home/>}>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='*' element={<Error/>}/>
  </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
