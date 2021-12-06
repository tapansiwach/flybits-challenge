import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Marketer from './pages/Marketer';
import User from './pages/User';
import Form from './pages/Form';
import './firebase/init';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketer" element={<Marketer />} />
          <Route path="/user" element={<User />} />
          <Route path="/promotions/new" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
