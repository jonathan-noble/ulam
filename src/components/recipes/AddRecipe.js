import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRecipe } from '../../store/actions/recipeActions';
import { Redirect } from 'react-router-dom';

class AddRecipe extends Component {

    state = {
        name: '',
        ingredients: '',
        directions: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addRecipe(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;

        if(!auth.uid) return <Redirect to='/signin'/>

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add new recipe</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea id="ingredients" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="directions">Directions</label>
                        <textarea id="directions" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">OK</button>    
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe) => dispatch(addRecipe(recipe))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe) 
