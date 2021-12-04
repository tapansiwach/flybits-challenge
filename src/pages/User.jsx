import React from 'react'
import './User.scss'

function User() {
  const imagesPath = process.env.PUBLIC_URL + "assets/images/";
  return (
    <div className="user">
      <label htmlFor="latitude">Latitude</label>
      <input type="text" name="latitude" id="latitude" />
      <label htmlFor="longitude">Longitude</label>
      <input type="text" name="longitude" id="longitude" />
      <div className="offer">
        <img src={`${imagesPath}money.jpg`} alt="" width="400px" />
        <p>Offer Caption</p>
      </div>
      <div className="offer">
        <img src={`${imagesPath}money.jpg`} alt="" width="400px" />
        <p>Offer Caption</p>
      </div>
    </div>
  )
}

export default User
