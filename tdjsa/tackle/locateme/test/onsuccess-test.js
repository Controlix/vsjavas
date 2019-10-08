describe('onSuccess test', function() {
  let setLocationStub;

  beforeEach(function() {
    setLocationStub = sandbox.stub(window, 'setLocation');
  });

  it('should call createURL with latitude and longitude', function() {
    const createURLSpy = sandbox.spy(window, 'createURL');
    const position = { coords: { latitude: 40.41, longitude: -105.55 }};

    onSucces(position);

    expect(createURLSpy).to.have.been.calledWith(40.41, -105.55);
  });

  it('should call setLocation with the URL returned bycreateURL', function() {
    const url = 'http://example.com';
    sandbox.stub(window, 'createURL')
            .returns(url);
    const position = { coords: { latitude: 40.41, longitude: -105.55 }};

    onSucces(position);

    expect(setLocationStub).to.have.been.calledWith(window, url);
  });
});
