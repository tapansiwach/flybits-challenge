import React, { useEffect, useState } from 'react'
import './User.scss'
import * as branchData from "../data/branches.json";
import Map from '../components/Map';

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
      <div className="map">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
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
