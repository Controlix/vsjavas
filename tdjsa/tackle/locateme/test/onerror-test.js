describe('onError test', function() {
  it('should set the error DOM element', function() {
    const domElement = { innerHTML: '' };
    sandbox.stub(document, 'getElementById')
            .withArgs('error')
            .returns(domElement);
    const message = "you're kidding";
    const positionError = { message };

    onError(positionError);

    expect(domElement.innerHTML).to.be.eq(message);
  });
});
