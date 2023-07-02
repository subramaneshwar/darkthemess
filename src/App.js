import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './reducer';

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };
  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Routes>
      <Route path='' element={<Home/>} />
        <Route path="/home"   element={<Home/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/service"  element={<Service/>} />
      </Routes>
    </div>
  );
}

export default App;
