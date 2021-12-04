import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Marketer from './pages/Marketer';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/marketer" element={<Marketer />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
