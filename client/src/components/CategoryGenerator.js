import React from 'react';

class CategoryGenerator extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
      }


      componentDidMount(){

    }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }


    render(){

        return (
        <div>
          
        </div>

        );
    }
}

export default CategoryGenerator;