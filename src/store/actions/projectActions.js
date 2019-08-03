export const createProject = (project) => {
    return (dispatch, getState) => {
        //make asynchronous call to database
        dispatch({ type: 'CREATE_PROJECT', project})

    }
};