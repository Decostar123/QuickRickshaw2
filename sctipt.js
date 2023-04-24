navigator.geolocation.getCurrentPosition(function (position, html5Error) {
  geo_loc = processGeolocationResult(position);
  currLatLong = geo_loc.split(",");
  initializeCurrent(currLatLong[0], currLatLong[1]);

  console.log(currLatLong);
});
