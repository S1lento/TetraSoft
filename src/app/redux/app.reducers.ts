import {Users} from './app.interfaces';
import {ActionsUnion, USER_ACTIONS} from './app.actions';

const initialState: Users = {
  users: []
};

export function appReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case USER_ACTIONS.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.data
      };
    case USER_ACTIONS.GET_USERS_FAILURE:
      return {error: action.payload};
    default:
      return state;
  }
}
