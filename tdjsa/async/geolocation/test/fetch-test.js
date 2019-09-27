describe('fetch location test', function() {
  it('should get lat and lon from fetchlocation', function(done) {
    const onSuccess = function(location) {

    };

    const onError = function(error) {
      throw 'not expected';
    };

      this.timeout(10000);

    fetchLocation(onSuccess, onError);
  });
});
