import React from 'react'
import './Marketer.scss'

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
          Map
        </div>
      </div>
    </div>
  )
}

export default Marketer
