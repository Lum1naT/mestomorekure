import React from 'react';

import { IconContext } from "react-icons";
import { FiMinus, FiPlus } from 'react-icons/fi';

class CategoryGenerator extends React.Component{

    constructor(props) {
        super(props);
        this.state = {numberOfCategories: 10, categories: ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5', 'Cat6', 'Cat7', 'Cat8', 'Cat9', 'Cat10', 'Cat11', 'Cat12', 'Cat13', 'Cat14', 'Cat15']};
      }


      componentDidMount(){
        this.generateCategories();
    }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

 

      generateCategories(){
        var result = [];
        var numsUsed = [];
        const categoriesArr = this.state.categories;
        const numberOfCategories = this.state.numberOfCategories;

        for(var i = 0; i < numberOfCategories; i++){
          var randomNum = this.getRandomInt(categoriesArr.length);
          while(numsUsed.indexOf(randomNum) !== -1){
            // if number has been used
            randomNum = this.getRandomInt(categoriesArr.length);
          }
          result.push(categoriesArr[randomNum]);
          numsUsed.push(randomNum);
        }
        //finally 
        this.renderCategories(result);

      }

      renderCategories(input){
        document.getElementById("category-list").innerHTML = "";
        for(var i = 0; i < input.length; i++){
          var span = document.createElement('span');
          var node = document.createElement('li');
          span.appendChild(document.createTextNode(input[i]));
          node.appendChild(span);
          span.className = "strikeout";
          document.getElementById("category-list").appendChild(node);
        }

      }

      setNumberOfCategories(event){
        const categoriesArr = this.state.categories;
        var input = event.target.value;
        event.target.className = "categoryNumberInput";
        if( input > categoriesArr.length){
          this.setState(state => ({
            numberOfCategories: categoriesArr.length,
          }));
          event.target.className += " max";

        }else if(input === ""){
          this.setState(state => ({
              numberOfCategories: 0,
            }));
          } else if (input.startsWith('0')) {
            this.setState(state => ({
              numberOfCategories: input.substring(1, input.length),
            }));
          } else {
            this.setState(state => ({
              numberOfCategories: input,
            }));
          }
      }


      

      increaseNumOfCat(){
        var NOC = this.state.numberOfCategories;
        document.getElementById("categoryNumberInput").className = "categoryNumberInput";
        if(!(NOC >= this.state.categories.length)){
          NOC += 1;

          this.setState(state => ({
            numberOfCategories: NOC,
          }));
        }

        if(NOC === this.state.categories.length){
          document.getElementById("categoryNumberInput").className += " max";
        }


      }

      decreaseNumOfCat(){
        var NOC = this.state.numberOfCategories;
        document.getElementById("categoryNumberInput").className = "categoryNumberInput";

        if(NOC > 0){
          NOC -= 1;
          this.setState(state => ({
            numberOfCategories: NOC,
          }));

        }

      }

      


    render(){

        return (
        <div>
          <div className="number-of-categories">
          <span onClick={() => this.decreaseNumOfCat()}>
             <IconContext.Provider value={{ className: "minus-icon symbol" }}>
  <span >
    <FiMinus />
  </span>
</IconContext.Provider>
</span> 
           <input id="categoryNumberInput" className="category-number-input" type="number" min="0" value={this.state.numberOfCategories} onChange={(event) => this.setNumberOfCategories(event)} placeholder="NUMBER OF CATEGORIES"/>
           <span onClick={() => this.increaseNumOfCat()}>
             <IconContext.Provider value={{ className: "plus-icon symbol" }}>
  <span >
    <FiPlus />
  </span>
</IconContext.Provider>
</span>  
            <span className="max-span"></span>
            
          </div>

            <div className="new-categories-btn" onClick={() => this.generateCategories()}> new categories </div>
            <ol className="category-list" id="category-list">
            </ol>
        </div>

        );
    }
}

export default CategoryGenerator;