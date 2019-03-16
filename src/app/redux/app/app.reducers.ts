import { Users } from './app.interfaces';
import { Action } from '@ngrx/store';
import { USER_ACTIONS, GetUsers } from './app.actions';

const initialState: Users = {
    users: []
}
export function appReducer (state = initialState, action: GetUsers) {
    switch(action.type) {
        case USER_ACTIONS.GET_USERS:
            return {
                ...state,
                users: [...state.users]
            }
        break;
        default: state
    }
}