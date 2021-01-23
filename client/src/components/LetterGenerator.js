import React from 'react';

class LetterGenerator extends React.Component{

    constructor(props) {
        super(props);
        this.state = {currentLetter: '', randomNums: [], random: 0, repeat: false, letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]};
      }


      componentDidMount(){
       
      }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      generateLetter(){
        const lettersArr = this.state.letters;
        var randomNum = this.getRandomInt(lettersArr.length);
        this.setState(state => ({
          random: randomNum,
          currentLetter: lettersArr[randomNum]
        }))
      }

      

    render(){

        return (
        <div>
            <p>{this.state.random}</p>
            <b>{this.state.currentLetter}</b>
            <button onClick={() => this.generateLetter()}>re-roll</button>
        </div>

        );
    }
}

export default LetterGenerator;