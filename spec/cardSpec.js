describe("Card", function() {

  // beforeEach(function() {
  //   card = new Card('red', 'red', 'blue')
  // });

  describe("#correctAnswer", function() {
    card = new Card('red', 'red', 'blue')

    it("returns correct answer", function() {
      expect(card.correctAnswer()).toEqual('red')
    });
  });
});
