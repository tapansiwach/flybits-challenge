import React, { useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
  Circle,
} from 'react-google-maps';
import * as branchData from "../data/branches.json";

function MarketerGoogleMap() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      onClick={(e) => {
        console.log(`lat`, e.latLng.lat());
        console.log(`lng`, e.latLng.lng());
      }}
    >
      {branchData.branches.map((branch) => (
        <Marker
          key={branch.branchAddress}
          position={{ lat: branch.lat, lng: branch.lng }}
          onClick={() => setSelectedBranch(branch)}
        />
      ))}
      {selectedBranch && (
        <InfoWindow
          zIndex={1}
          position={{ lat: selectedBranch.lat, lng: selectedBranch.lng }}
          onCloseClick={() => setSelectedBranch(null)}
        >
          <div>Branch Info</div>
        </InfoWindow>
      )}
      {branchData.branches.map((branch) => (
        <Circle
          defaultCenter={{ lat: branch.lat, lng: branch.lng }}
          radius={branch.circle.radius}
          options={branch.circle.options}
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
