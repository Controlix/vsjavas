describe('locate test', function() {
  // it('should register handlers with getCurrentPosition', function(done) {
  //   const original = navigator.geolocation.getCurrentPosition;
  //   navigator.geolocation.getCurrentPosition = function(success, error) {
  //     expect(success).to.be.eql(onSucces);
  //     expect(error).to.be.eql(onError);
  //     done();
  //   };
  //
  //   locate();
  //
  //   navigator.geolocation.getCurrentPosition = original;
  // });

  it('should register handlers with getCurrentPosition', function() {
    const getCurrentPositionMock = sandbox.mock(navigator.geolocation)
                                          .expects('getCurrentPosition')
                                          .withArgs(onSucces, onError);
    locate();

    getCurrentPositionMock.verify();
  });
});
