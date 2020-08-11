class Card {
  constructor(text, textColour, backgroundColour) {
    this.text = text
    this.textColour = textColour
    this.backgroundColour = backgroundColour
  }

  correctAnswer() {
    if(this.text == 'duck'){
      return this.textColour
    }
    if(!CardProperty.colours().includes(this.text)){
      return this.text
    }
    if(this.textColour === 'black'){
      return this.backgroundColour
    }
    if(this.text === this.textColour){
      return this.text
    }
  };

  _privateMethd(){
    //do this
    //return this;
  };
};
