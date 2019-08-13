export const addRecipe = (recipe) => {
    return (dispatch, getState, { getFirebase, getFirestore })  => {
        //make asynchronous call to database
        const firestore = getFirestore();

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('recipes').add({
            ...recipe,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'ADD_RECIPE', recipe})
        }).catch((err) => {
            dispatch({ type: 'ADD_RECIPE_ERROR', err})
        })

  
    }
};

export const deleteRecipe = (recipeId) => {
    return (dispatch, getState, { getFirebase, getFirestore })  => {
        //make asynchronous call to database
        const firestore = getFirestore();

        firestore.collection('recipes').doc(recipeId).delete().then(() => {
            dispatch({ type: 'DELETE_RECIPE', recipeId})
        }).catch((err) => {
            dispatch({ type: 'DELETE_RECIPE_ERROR', err})
        })
    }
};

export const updateRecipe = (recipeId, name, ingredients, directions) => {
    return (dispatch, getState, { getFirebase, getFirestore })  => {
        //make asynchronous call to database
        const firestore = getFirestore();
        //TODO: figure out why parameters(n,i,d) are converting to an undefined after being received here
        console.log(recipeId, typeof(name), ingredients, directions)

        firestore.collection('recipes').doc(recipeId).update({
            name: name,
            ingredients: ingredients,
            directions: directions
        }).then(() => {
            dispatch({ type: 'UPDATE_RECIPE', recipeId})
        }).catch((err) => {
            dispatch({ type: 'UPDATE_RECIPE_ERROR', err})
        })
    }
};