export const checkToken = (error) => async dispatch=> {
    if (error.status === 404) {
        dispatch({type: 'logout'})
    }
}