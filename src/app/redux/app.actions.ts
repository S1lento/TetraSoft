import {Action} from '@ngrx/store';
import {UsersPayload} from './app.models';
import {HttpErrorResponse} from '@angular/common/http';

export enum USER_ACTIONS {
  GET_USERS = 'GET_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'GET_USERS_FAILURE'
}

export class GetUsers implements Action {
  readonly type = USER_ACTIONS.GET_USERS;
}

export class GetUsersSuccess implements Action {
  readonly type = USER_ACTIONS.GET_USERS_SUCCESS;

  constructor(public users: UsersPayload) {
  }
}

export class GetUsersFailure implements Action {
  readonly type = USER_ACTIONS.GET_USERS_FAILURE;

  constructor(public error: HttpErrorResponse) {
  }
}

export type ActionsUnion = GetUsers | GetUsersSuccess | GetUsersFailure;


