import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Work from './Views/Work';
import About from './Views/About';
import Home from './Views/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='aboutme' element={<About />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
