import React, { useEffect, useState } from 'react'
import './User.scss'
import * as branchData from "../data/branches.json";
import Map from '../components/Map';

function User() {
  const [offers, setOffers] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const getAllOffers = () => {
    const allOffers = branchData.branches
      .flatMap(branch => branch.offers);
    return allOffers;
  }

  useEffect(() => {
    const allOffers = getAllOffers();
    setOffers(allOffers);
  }, []);

  useEffect(() => {
    console.log(`lat`, lat);
    console.log(`lng`, lng);
    if (lat && lng) {
      // call a helper function to check proximity from a branch with promotion
    }
  }, [lat, lng])

  return (
    <div className="user">
      <label htmlFor="latitude">Latitude</label>
      <input type="text" name="latitude" id="latitude"
        value={lat}
        onChange={e => setLat(e.target.value)}
      />
      <label htmlFor="longitude">Longitude</label>
      <input type="text" name="longitude" id="longitude"
        value={lng}
        onChange={e => setLng(e.target.value)}
      />
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
