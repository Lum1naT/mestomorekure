import React from 'react';

class Timer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {startTime: 120, currentTime: 0, ticking: false};
      }


      componentDidMount(){
        this.setState(state => ({
            currentTime: state.startTime
          }));
        

      }

      tick() {
        if(this.state.currentTime === 1 || this.state.currentTime === "1") {
            clearInterval(this.interval);
            console.log(this.interval);
            alert('Time is up!');
            this.resetTimer();
            return;
        }
        this.setState(prevState => ({
            currentTime: prevState.currentTime - 1
          }));

  }


      startTimer(){
        this.hideButton('start');
        this.showButton('stop');
        if(this.state.currentTime === 0){
            this.setState(state => ({
                currentTime: state.startTime,
              }));

        }

  
        if(!this.state.ticking){
            const boundTick = this.tick.bind(this)
            this.interval = setInterval(boundTick, 1000);
        }



        this.setState(state => ({
            ticking: true,
          }));
          
        

      }

      resetTimer(){
          console.log('reseting timer.');
        this.setState(state => ({
            currentTime: state.startTime
          }));

        this.stopTimer();
      }

      stopTimer(){

        this.hideButton('stop');
        this.showButton('start');
        clearInterval(this.interval);

        this.setState(state => ({
            ticking: false,
          }));

      }

      setStart(event){
          if(event.target.value === ""){
            this.setState(state => ({
                startTime: 0,
                currentTime: 0,
              }));

          } else {
            this.setState(state => ({
                startTime: parseInt(event.target.value, 10),
                currentTime: parseInt(event.target.value, 10),
              }));
          }

      }

      selectInput(){
        const input = document.getElementById('time');
        input.focus();
        input.select();

      }

      showButton(type){
        const button = document.getElementById(type + '-button');
        button.style.display = "block";
      }

      hideButton(type){
        const button = document.getElementById(type + '-button');
        button.style.display = "none";
      }

      


    render(){

        return (
        <div>
            <input id="time" type="number" min="0"  value={this.state.currentTime} onFocus={() => this.selectInput()} onChange={(event) => this.setStart(event)}/>
            <button id="start-button" onClick={() => this.startTimer()}>Start</button>
             <button id="stop-button"  onClick={() => this.stopTimer()}>Stop</button>
             <button id="reset-button" onClick={() => this.resetTimer()}>Reset</button>
        </div>

        );
    }
}

export default Timer;