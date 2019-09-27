const fetchLocation = function(onSuccess, onError) {
  var returnLocation = function(position) {
    var location = {
      lat: position.coords.latitude, lon: position.coords.longitude };

    onSuccess(location);
  };

  navigator.geolocation.getCurrentPosition(returnLocation, onError);
};

const gotoLocation = function(location) {
  const url = "https://www.google.be/maps/@" + location.lat + "," + location.lon + "z"; //50.9471439,4.038005,13z
  window.location = url;
}

const showError = function(err) {
  document.getElementById('error').innerHTML = "Something went wrong " + err.code;
};

const locate = function() {
  fetchLocation(gotoLocation, showError);
};
