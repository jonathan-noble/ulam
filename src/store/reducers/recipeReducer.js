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
        default:
            return state;
    }
}


export default recipeReducer