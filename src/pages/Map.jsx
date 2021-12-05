import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

function GMap() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    >
    </GoogleMap>
  )
}

const Map = withScriptjs(withGoogleMap(GMap));

export default Map
