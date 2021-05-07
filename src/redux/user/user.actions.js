import {UserActionTypes} from './user.types'

export const setCurrentUser=user => ({ //function that return an Action object

 type:UserActionTypes.SET_CURRENT_USER,
 payload:user



});