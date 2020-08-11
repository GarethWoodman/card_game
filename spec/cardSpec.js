describe("Card", function() {

  // beforeEach(function() {
  //   card = new Card('red', 'red', 'blue')
  // });

  describe("#correctAnswer", function() {
    it("returns red if textColour matches text", function() {
      card = new Card('red', 'red', 'blue')
      expect(card.correctAnswer()).toEqual('red')
    });
  });
});
