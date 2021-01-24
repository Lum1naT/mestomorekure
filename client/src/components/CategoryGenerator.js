import React from 'react';

class CategoryGenerator extends React.Component{

    constructor(props) {
        super(props);
        this.state = {categories: []};
      }


      componentDidMount(){

    }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }


    render(){

        return (
        <div>
            <input type="number" min="0" placeholder="NUMBER OF CATEGORIES"/>
        </div>

        );
    }
}

export default CategoryGenerator;