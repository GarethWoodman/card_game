class Card {
  constructor(text, textColour, backgroundColour) {
    this.text = text
    this.textColour = textColour
    this.backgroundColour = backgroundColour
  }

  correctAnswer() {
    if(this.text === this.textColour){
      return this.text
    }
  };

  _privateMethd(){
    //do this
    //return this;
  };
};
