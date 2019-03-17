import {Users} from './app.interfaces';
import {GetUsers, USER_ACTIONS} from './app.actions';

const initialState: Users = {
    users: []
};

export function appReducer(state = initialState, action: GetUsers) {
    switch (action.type) {
        case USER_ACTIONS.GET_USERS:
            return {
                ...state,
                users: [...state.users]
            };
    /* case USER_ACTIONS.GET_USERS_SUCCESS:
        return {
          ...state,

        },
      case USER_ACTIONS.GET_USERS_FAILURE:
        return {

        }*/
        default: return state;
    }
}
