import {UserActionTypes} from './user.types';
const INITIAL_STATE ={
    currentUser: null
}

const userReducer=(state=INITIAL_STATE,action) => { //Reducers represents a slice of the State object
  switch(action.type) {
     
    case UserActionTypes.SET_CURRENT_USER:
        return {                //set the state and returns a new object
            ...state,
            currentUser:action.payload
        }

        default:
            return state;
              
  }

};

export default userReducer;