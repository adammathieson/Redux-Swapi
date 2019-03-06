// we'll need axios
import axios from 'axios';

export const CHAR_FETCHING = "CHAR_FETCHING";
export const CHAR_SUCCESS = "CHAR_SUCCESS";
export const CHAR_FAILURE = "CHAR_FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const getChar = () => dispatch => {

    dispatch({ type: CHAR_FETCHING });

    axios
        .get('https://swapi.co/api/people')
        .then(res => {
            dispatch({ 
                type: CHAR_SUCCESS, 
                payload: res.data })
        })
        .catch(err => {
            dispatch({
                type: CHAR_FAILURE,
                payload: err.response.data.error.message
            });
        });
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
