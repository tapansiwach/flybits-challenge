import React from 'react'
import './Marketer.scss'
import Map from '../components/Map';
import * as branchData from "../data/branches.json";

function Marketer() {
  return (
    <div className="marketer">
      <div className="marketer__sidenav">
        <ul>
          {branchData.branches.map((branch) => (
            <li>
              <p>{branch.bank}</p>
              <p>{branch.branchAddress}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="marketer__mainContent">
        <div className="map">
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    </div>
  )
}

export default Marketer
