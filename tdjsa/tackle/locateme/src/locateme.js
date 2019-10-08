var createURL = function(latitude, longitude) {
  if (latitude && longitude)
    return 'http://maps.google.com/?q=' + latitude + ',' + longitude;

  return '';
}

var setLocation = function(window, url) {
  window.location = url;
}

const onError = function(error) {
  document.getElementById('error').innerHTML = error.message;
};

const onSucces = function(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const url = createURL(latitude, longitude);
  setLocation(window, url);
};

const locate = function() {
  navigator.geolocation.getCurrentPosition(onSucces, onError);
};
