import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
  Circle,
} from 'react-google-maps';
// import * as branchData from "../data/branches.json";
import { getOffers } from '../firebase/db';

function MarketerGoogleMap() {
  // const [selectedBranch, setSelectedBranch] = useState(null);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const allOffers = await getOffers()
      setOffers(allOffers);
    }
    loadData();
  }, []);

  console.log(`offers`, offers);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      onClick={(e) => {
        console.log(`lat`, e.latLng.lat());
        console.log(`lng`, e.latLng.lng());
      }}
    >
      {offers?.map((offer, index) => (
        <Marker
          key={index}
          position={{ lat: offer.lat, lng: offer.lng }}
        // onClick={() => setSelectedBranch(branch)}
        />
      ))}
      {/* {selectedBranch && (
        <InfoWindow
          zIndex={1}
          position={{ lat: selectedBranch.lat, lng: selectedBranch.lng }}
          onCloseClick={() => setSelectedBranch(null)}
        >
          <div>Branch Info</div>
        </InfoWindow>
      )} */}
      {offers?.map((offer, index) => (
        <Circle
          key={index}
          defaultCenter={{ lat: offer.lat, lng: offer.lng }}
          radius={offer.radius}
          options={{
            strokeColor: "#ff0000",
            fillColor: "#ff0000",
            fillOpacity: 0.35
          }}
        />
      ))}
    </GoogleMap>
  )
}

function UserGoogleMap(props) {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      onClick={(e) => {
        console.log(`lat`, e.latLng.lat());
        console.log(`lng`, e.latLng.lng());
        props.setUserLocation(e.latLng.lat(), e.latLng.lng());
      }}
    >
    </GoogleMap>
  )
}

const MarketerMap = withScriptjs(withGoogleMap(MarketerGoogleMap));
const UserMap = withScriptjs(withGoogleMap(UserGoogleMap));

export {
  MarketerMap,
  UserMap,
}
