import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { USER_ACTIONS } from './app.actions';
import {mergeMap} from 'rxjs/operators';

/*@Injectable()
export class RequestUsersEffect {
  @Effect()
  public getUsers$: Observable<Action> = this.actions$.pipe(
    ofType(USER_ACTIONS.GET_USERS)
  ).subscribe(response => console.log(response));

  constructor(private actions$: Actions) {
  }
}*/
