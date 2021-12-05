import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import * as branchData from "../data/branches.json";

function GMap() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    >
      {branchData.branches.map((branch) => (
        <Marker
          key={branch.branchAddress}
          position={{ lat: branch.lat, lng: branch.lng }}
        />
      ))}
    </GoogleMap>
  )
}

const Map = withScriptjs(withGoogleMap(GMap));

export default Map
