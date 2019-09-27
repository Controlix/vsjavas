var fetchLocation = function(onSuccess, onError) {
  var returnLocation = function(position) {
    var location = {
      lat: position.coords.latitude, lon: position.coords.longitude };

    onSuccess(location);
  };

  navigator.geolocation.getCurrentPosition(returnLocation, onError);
};


var locate = function() {
  this.fetchLocation(undefined, function(err) {
    document.getElementById('error').innerHTML = "Something went wrong " + err.code;
  });
};
