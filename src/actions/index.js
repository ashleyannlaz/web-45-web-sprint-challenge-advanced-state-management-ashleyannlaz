import axios from 'axios';

export const fetchSmurfs = () => {
    return (dispatch) =>  {
        dispatch({type:SMURF_FETCH})
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
          dispatch({type: SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
        //   props.getError(err);
          dispatch({type: GET_ERROR, payload: err})
        })
    }
}

export const ADD_SMURF = "ADD_SMURF";
export const addSmurf = (smurf) => {
    return({type:ADD_SMURF,payload: smurf})
}

export const GET_ERROR = "GET_ERROR";
export const getError = (error) => {
    return({type:GET_ERROR, payload: error})
}

export const SMURF_FAIL ="SMURF_FAIL";
export const smurfFail = (error) => {
    return({type:SMURF_FAIL, payload:error})
}

export const SMURF_FETCH = "SMURF_FETCH";
export const smurfFetch = () => {
    return({type:SMURF_FETCH})
}

export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const smurfSuccess = (smurf) => {
    return({type:SMURF_SUCCESS, payload: smurf})

}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.