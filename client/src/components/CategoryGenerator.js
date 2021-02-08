import React from 'react';

class CategoryGenerator extends React.Component{

    constructor(props) {
        super(props);
        this.state = {numberOfCategories: 12 ,categories: ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5', 'Cat6', 'Cat7', 'Cat8', 'Cat9', 'Cat10', 'Cat11', 'Cat12', 'Cat13', 'Cat14', 'Cat15']};
      }


      componentDidMount(){

    }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      generateCategory(number){
        const categoriesArr = this.state.categories;


      }

      generateCategories(){
        var result = [];
        var numsUsed = [];
        const categoriesArr = this.state.categories;





      }

      setNumberOfCategories(event){
        console.log(event.target.value);
      }


    render(){

        return (
        <div>
            <input className="categoryNumberInput" type="number" min="0" value={this.state.numberOfCategories} onChange={(event) => this.setNumberOfCategories(event)} placeholder="NUMBER OF CATEGORIES"/>
            <ol className="category-list">
            <li> {this.props.omega} </li>
            </ol>
        </div>

        );
    }
}

export default CategoryGenerator;