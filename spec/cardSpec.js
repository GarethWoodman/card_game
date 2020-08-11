describe("Card", function() {

  // beforeEach(function() {
  //   card = new Card('red', 'red', 'blue')
  // });

  describe("#correctAnswer", function() {
    it("returns red if textColour matches text", function() {
      card = new Card('red', 'red', 'blue')
      expect(card.correctAnswer()).toEqual('red')
    });

    it("returns blue if textColour is black", function() {
      card = new Card('red', 'black', 'blue')
      expect(card.correctAnswer()).toEqual('blue')
    });

    it("returns chicken as it is not a colour", function() {
      card = new Card('chicken', 'black', 'blue')
      expect(card.correctAnswer()).toEqual('chicken')
    });

    it("returns red as you can't say duck", function() {
      card = new Card('duck', 'red', 'green')
      expect(card.correctAnswer()).toEqual('red')
    });
  });
});
