import React, { useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import * as branchData from "../data/branches.json";

function GMap() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
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
    </GoogleMap>
  )
}

const Map = withScriptjs(withGoogleMap(GMap));

export default Map
