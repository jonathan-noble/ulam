const initState = {
    recipes: null
}

const recipeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_RECIPE':
            console.log('created recipe', action.recipe)
            return state;
        case 'ADD_RECIPE_ERROR':
            console.log('create recipe error', action.err);
            return state;
        case 'DELETE_RECIPE':
            console.log('deleted recipe', action.recipeId)
            return state;
        case 'DELETE_RECIPE_error':
            console.log('delete recipe error', action.err);
            return state;
        case 'UPDATE_RECIPE':
            console.log('updated recipe', action.recipeId)
            return state;
        case 'UPDATE_RECIPE_ERROR':
            console.log('update recipe error', action.err);
            return state;
        default:
            return state;
    }
}


export default recipeReducer