import React from 'react'
import './Marketer.scss'
import Map from './Map';

function Marketer() {
  return (
    <div className="marketer">
      <div className="marketer__sidenav">
        Side Nav
        <ul>
          <li>Branch Name 1</li>
          <li>Branch Name 2</li>
          <li>Branch Name 3</li>
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
