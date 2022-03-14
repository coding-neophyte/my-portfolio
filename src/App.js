import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom'
import Work from './Views/Work';
import About from './Views/About';
import Home from './Views/Home';
import Resume from './Views/Resume'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='nav-container'>
    <Link to='/' className='icon'><h1>JF</h1></Link>
    <NavLink to='/' className='nav'> Home </NavLink>
    <NavLink to='/work' className='nav'> Work </NavLink>
    <NavLink to='/aboutme' className='nav'> About </NavLink>
    <NavLink to='/resume' className='nav'> Resume </NavLink>
    </div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/aboutme' element={<About />}/>
      <Route path='/resume' element={<Resume />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
