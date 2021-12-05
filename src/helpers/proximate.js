// reference: https://towardsdatascience.com/heres-how-to-calculate-distance-between-2-geolocations-in-python-93ecab5bbba4
// def haversine_distance(lat1, lon1, lat2, lon2):
//    r = 6371
//    phi1 = np.radians(lat1)
//    phi2 = np.radians(lat2)
//    delta_phi = np.radians(lat2 — lat1)
//    delta_lambda = np.radians(lon2 — lon1)
//    a = np.sin(delta_phi / 2)**2 + np.cos(phi1) * np.cos(phi2) *   np.sin(delta_lambda / 2)**2
//    res = r * (2 * np.arctan2(np.sqrt(a), np.sqrt(1 — a)))
//    return np.round(res, 2)

function distance(lat1, lon1, lat2, lon2) {
  const R = 6371071.0; // Radius of the Earth in meters
  const phi1 = lat1 * (Math.PI / 180);
  const phi2 = lat2 * (Math.PI / 180);
  const delta_phi = (lat2 - lat1) * (Math.PI / 180);
  const delta_lambda = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.pow(Math.sin(delta_phi / 2), 2) + Math.cos(phi1) * Math.cos(phi2) * Math.pow(Math.sin(delta_lambda / 2), 2)
  const result = 2 * R * Math.asin(Math.pow(a, 0.5))
  return Math.round(result); // return value is distance in meters
}

const proximate = (branchPosition, userPosition, offerZoneRadius) => {
  const lat1 = branchPosition.lat;
  const lon1 = branchPosition.lng;
  const lat2 = userPosition.lat;
  const lon2 = userPosition.lng;
  const proximity = distance(lat1, lon1, lat2, lon2);
  const proximate = proximity < offerZoneRadius ? true : false;
  return proximate;
}

export default proximate;