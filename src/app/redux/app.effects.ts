import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {USER_ACTIONS} from './app.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersEffect {
  @Effect()
  public getUsers$: Observable<Action> = this.actions$.pipe(
    ofType(USER_ACTIONS.GET_USERS),
    mergeMap(() => this.http.get('https://reqres.in/api/users')
      .pipe(
        map(payload => ({type: USER_ACTIONS.GET_USERS_SUCCESS, payload})),
        catchError((payload) => of({type: USER_ACTIONS.GET_USERS_FAILURE, payload})))
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
