import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Marketer from './pages/Marketer';
import User from './pages/User';
import Map from './pages/Map';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/marketer" element={<Marketer />} />
          <Route path="/user" element={<User />} />
          <Route path="/map" element={
            <div style={{ width: "100vw", height: "100vh" }}>
              <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
              />
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
