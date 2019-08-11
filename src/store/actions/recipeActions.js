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