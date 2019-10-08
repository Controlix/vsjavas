describe('create-url test', function() {
  it('should return proper url given lat and lon', function() {
    const latitude = -33.857;
    const longitude = 151.215;

    const url = createURL(latitude, longitude);

    expect(url).to.be.eq('http://maps.google.com/?q=-33.857,151.215');
  });

  it('should return proper url given another lat and lon', function() {
    const latitude = 37.827;
    const longitude = -122.423;

    const url = createURL(latitude, longitude);

    expect(url).to.be.eq('http://maps.google.com/?q=37.827,-122.423');
  });

  it('should return empty string if latitude is undefined', function() {
    const latitude = undefined;
    const longitude = 188.123;

    const url = createURL(latitude, longitude);

    expect(url).to.be.eq('');
  });

  it('should return empty string if longitude is undefined', function() {
    const latitude = -40.234;
    const longitude = undefined;

    const url = createURL(latitude, longitude);

    expect(url).to.be.eq('');
  });
});
