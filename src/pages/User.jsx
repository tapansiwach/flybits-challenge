import React, { useEffect, useState } from 'react'
import './User.scss'
import { getOffers } from '../firebase/db';
import { UserMap } from '../components/Map';
import proximate from '../helpers/proximate';

function User() {
  const [offers, setOffers] = useState([]);
  const [userLat, setUserLat] = useState("");
  const [userLng, setUserLng] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const allOffers = await getOffers()
      setOffers(allOffers);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (userLat && userLng) {
      const relevantOffers = [];
      for (const offer of offers) {
        const nearby = proximate(
          { lat: offer.lat, lng: offer.lng },
          { lat: userLat, lng: userLng },
          offer.radius
        );
        if (nearby) {
          relevantOffers.push(offer);
        }
      }
      setOffers(relevantOffers);
    }
  }, [userLat, userLng])

  const setUserLocation = (latitude, longitude) => {
    setUserLat(latitude);
    setUserLng(longitude);
  }

  return (
    <div className="user">
      <br />
      <h2>Movement Simulator</h2>
      <form method="get" class="promotion-form">
        <div className="form-row">
          <label htmlFor="latitude">Latitude</label>
          <input type="text" name="latitude" id="latitude"
            value={userLat}
            onChange={e => setUserLat(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="longitude">Longitude</label>
          <input type="text" name="longitude" id="longitude"
            value={userLng}
            onChange={e => setUserLng(e.target.value)}
          />
        </div>
      </form>
      <div className="map">
        <UserMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          setUserLocation={setUserLocation}
        />
      </div>
      <br /><br />
      <h2>List of Offers</h2>
      {offers?.map((offer, index) => (
        <div key={index} className="offer">
          <img src={offer.imgSrc} alt="promotional offer" width="370px" />
          <p>{offer.caption}</p>
        </div>
      ))}
    </div>
  )
}

export default User
