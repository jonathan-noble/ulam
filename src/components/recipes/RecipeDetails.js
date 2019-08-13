import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment'
import { deleteRecipe, updateRecipe } from '../../store/actions/recipeActions';
import { getFirestore } from 'redux-firestore';

export class RecipeDetails extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        const { recipe } = this.props;
        this.state = {
            isToggle: false,
            name: recipe.name,
            ingredients: recipe.ingredients,
            directions: recipe.directions
        };
        this.handleUpdate = this.handleUpdate.bind(this);
      }

    
    handleChange = (e) => {
        const state = this.state
        this.setState({
            [e.target.id]: e.target.value
        })
        this.setState({recipe:state});
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteRecipe(this.props.match.params.id);
        this.props.history.push('/');
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.setState({isToggle: !this.state.isToggle});
    }

    handleEdit = (e) => {
        e.preventDefault();
        const { name, ingredients, directions } = this.state;
        //TODO: resolve in returning this updateRecipe back and figure why these arguments passes as undefined
        // this.props.updateRecipe(this.props.match.params.id, name, ingredients, directions);

        // temporary solution
        getFirestore().collection('recipes').doc(this.props.match.params.id).update({
            name: name,
            ingredients: ingredients,
            directions: directions
        });

        
        this.setState({isToggle: !this.state.isToggle});
    }
    
    render() {
        const { recipe, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
    
        if (recipe) {
            return (
                <div className="container section">
                        { this.state.isToggle ? 
                            <form onSubmit={this.handleEdit} className="white">
                            <h5 className="grey-text text-darken-3">Edit recipe</h5>
                                <div className="input-field">
                                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <textarea id="ingredients" className="materialize-textarea" value={this.state.ingredients} onChange={this.handleChange}></textarea>
                                </div>
                                <div className="input-field">
                                    <textarea id="directions" className="materialize-textarea" value={this.state.directions} onChange={this.handleChange}></textarea>
                                </div>
                                <div className="input-field">
                                    <button className="btn pink lighten-1 z-depth-0">OK</button>    
                                </div>
                            </form>    
                            :   <div className="card recipe-details">  
                                <div className="card-content recipe-content">
                                    <span className="card-title rec-name">{recipe.name}</span>
                                    <p className="recipe rec-ing">{recipe.ingredients}</p>
                                    <p className="recipe rec-dir">{recipe.directions}</p>
                                </div>
                                <div className="card-action grey lighten-4 grey-text">
                                    <div>Posted by {recipe.authorFirstName} {recipe.authorLastName}</div>
                                    <div>{moment(recipe.createdAt.toDate()).calendar()}</div>
                                </div> 
                                <div className="card-action lighten-4 grey-text">
                                    <button className="btn pink lighten-1 detail-btn" onClick={this.handleUpdate}>Edit</button>
                                    <button className="btn pink lighten-1 detail-btn" onClick={this.handleDelete}>Delete</button>
                                </div> 
                            </div>
                             }
           </div>
         )
        } else {
            return (
                <div className="container center">
                 <p>Loading recipe....</p>
                </div>
            )
            }
        }
   
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipes;
    const recipe = recipes ? recipes[id] : null;
    return {
        recipe: recipe,
        auth: state.firebase.auth 
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteRecipe: (recipe) => dispatch(deleteRecipe(recipe)),
        updateRecipe: (recipe) => dispatch(updateRecipe(recipe))
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'recipes'}
    ])
)(RecipeDetails)
