import React, { useEffect, useState } from 'react'
import './User.scss'
import * as branchData from "../data/branches.json";

function User() {
  const [offers, setOffers] = useState([]);

  const getAllOffers = () => {
    const allOffers = branchData.branches
      .flatMap(branch => branch.offers);
    return allOffers;
  }

  useEffect(() => {
    const allOffers = getAllOffers();
    setOffers(allOffers);
  }, []);

  return (
    <div className="user">
      <label htmlFor="latitude">Latitude</label>
      <input type="text" name="latitude" id="latitude" />
      <label htmlFor="longitude">Longitude</label>
      <input type="text" name="longitude" id="longitude" />
      {offers?.map(offer => (
        <div className="offer">
          <img src={offer.imgSrc} alt="promotional offer" width="400px" />
          <p>{offer.caption}</p>
        </div>
      ))}
    </div>
  )
}

export default User
