import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import { DeleteBtn } from "../../components/Buttons"

class Saved extends Component {

    // state
    state = {
      recipes: [],
    };

  // componentDidMount
  componentDidMount() {
    console.log("SaveRecipes component mounted");
    this.loadSavedRecipes();
  };

  loadSavedRecipes = () => {
    console.log("...loading saved recipes")
    API.getSavedRecipes()
    .then(res => {
        console.log("Recipe Saved!", res.data)
        this.setState({ 
          recipes: res.data
        })
      }
    )
    .catch(err => console.log("ERR", err));
  }

  deleteRecipe = id => {
    console.log("...deleting recipe", id);
      API.deleteRecipe(id)
        .then(res => this.loadSavedRecipes())
        .catch(err => console.log(err));
    }
    
  render() {
    const items = this.state.recipes.map( recipe => 
        <ul>
          <p>{recipe.title}</p> 
          <DeleteBtn id={recipe._id} onClick={this.deleteRecipe} /> 
        </ul>   
    )

    return (
      <Container fluid>
        {items}  
      </Container>
    );

  }
}

export default Saved;
