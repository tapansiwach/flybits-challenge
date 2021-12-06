import React, { useState, useEffect } from 'react'
import './Marketer.scss'
import { MarketerMap } from '../components/Map';
// import * as branchData from "../data/branches.json";
import { getOffers } from '../firebase/db';

function Marketer() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const allOffers = await getOffers()
      setOffers(allOffers);
    }
    loadData();
  }, []);

  return (
    <div className="marketer">
      <div className="marketer__sidenav">
        <ul>
          {offers.map((offer, index) => (
            <li key={index}>
              <p>{offer.bank}</p>
              <p>{offer.address}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="marketer__mainContent">
        <div className="map">
          <MarketerMap
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
