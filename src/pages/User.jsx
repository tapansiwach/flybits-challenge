import React from 'react'
import './User.scss'
import * as branchData from "../data/branches.json";

function User() {
  const imagesPath = process.env.PUBLIC_URL + "assets/images/";
  return (
    <div className="user">
      <label htmlFor="latitude">Latitude</label>
      <input type="text" name="latitude" id="latitude" />
      <label htmlFor="longitude">Longitude</label>
      <input type="text" name="longitude" id="longitude" />
      {branchData.branches.map((branch) => (
        <div className="offer">
          <img src={branch.offers[0].imgSrc} alt="promotional offer" width="400px" />
          <p>{branch.offers[0].caption}</p>
        </div>
      ))}
    </div>
  )
}

export default User
