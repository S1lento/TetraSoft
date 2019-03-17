import { Action } from '@ngrx/store';

import { User } from '../../components/app/user.model';

export namespace USER_ACTIONS {
   export const GET_USERS = 'GET_USERS';
}

export class GetUsers implements Action {
    readonly type = USER_ACTIONS.GET_USERS;

    // constructor(public payload: User) {}
}


