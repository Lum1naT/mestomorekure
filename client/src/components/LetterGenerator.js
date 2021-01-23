import React from 'react';

class LetterGenerator extends React.Component{

    constructor(props) {
        super(props);
        this.state = {currentLetter: '', randomNums: [], repeat: true, repeatText: "Letters CAN repeat", letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]};
      }


      componentDidMount(){
       this.generateLetter();
      }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      generateLetter(){
        const lettersArr = this.state.letters;
        // check for non-repeating letters
        if(this.state.randomNums.length === 26){
          this.toggleRepeat();
          alert('You ran out of letters! \n Toggling repeat - letters CAN repeat now.');
          return;
        }


        if(this.state.repeat){
          // Letters CAN repeat
          var randomNum = this.getRandomInt(lettersArr.length);
          this.setState(state => ({
            currentLetter: lettersArr[randomNum]
          }))
        } else {
          // Letters CANNOT repeat
          randomNum = this.getRandomInt(lettersArr.length);
          while(this.state.randomNums.indexOf(randomNum) !== -1){
            randomNum = this.getRandomInt(lettersArr.length);
          }

          var resultNums = this.state.randomNums;
          resultNums.push(randomNum);

          this.setState(state => ({
            randomNums: resultNums,
            currentLetter: lettersArr[randomNum]

          }))


        }

      }
      
      toggleRepeat(){
        if(this.state.repeat){
          this.setState(state => ({
            repeat: false,
            repeatText: "Letters CANNOT repeat"
          }))
        } else {
          this.setState(state => ({
            repeat: true,
            repeatText: "Letters CAN repeat",
            randomNums: []
          }))
        }
      }
      

    render(){

        return (
        <div>
          <button onClick={() => this.toggleRepeat()}>{this.state.repeatText}</button>
            <b>{this.state.currentLetter}</b>
            <button onClick={() => this.generateLetter()}>re-roll</button>
        </div>

        );
    }
}

export default LetterGenerator;