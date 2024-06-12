import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/my-cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
