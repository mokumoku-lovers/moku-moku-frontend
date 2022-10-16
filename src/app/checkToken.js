export const checkToken = (error) => async dispatch=> {
    if (error.status === 400) {
        dispatch({type: 'logout'})
    }
}
