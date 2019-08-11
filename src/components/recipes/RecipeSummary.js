import React from 'react'
import moment from 'moment'

const RecipeSummary = ({recipe}) => {
    return (
        
        <div className="card recipe-summary">
          <div className="card-ingredients grey-text text-darken-3">
            <span className="card-title">{recipe.name}</span>
                <p>Posted by {recipe.authorFirstName} {recipe.authorLastName} </p>
                <p className="grey-text">{moment(recipe.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
    )
}

export default RecipeSummary;