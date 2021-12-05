import React, { useEffect, useState } from 'react'
import './User.scss'
import * as branchData from "../data/branches.json";
import Map from '../components/Map';
import proximate from '../helpers/proximate';

function User() {
  const [offers, setOffers] = useState([]);
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);

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
    if (userLat && userLng) {
      const relevantOffers = [];
      for (const branch of branchData.branches) {
        const nearby = proximate(
          { lat: branch.lat, lng: branch.lng },
          { lat: userLat, lng: userLng },
          branch.circle.radius
        );
        if (nearby) {
          relevantOffers.push(...branch.offers);
        }
      }
      setOffers(relevantOffers);
    }
  }, [userLat, userLng])

  return (
    <div className="user">
      <label htmlFor="latitude">Latitude</label>
      <input type="text" name="latitude" id="latitude"
        value={userLat}
        onChange={e => setUserLat(e.target.value)}
      />
      <label htmlFor="longitude">Longitude</label>
      <input type="text" name="longitude" id="longitude"
        value={userLng}
        onChange={e => setUserLng(e.target.value)}
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
