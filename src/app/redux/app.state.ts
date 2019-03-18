import {User} from './app.models';
import {HttpErrorResponse} from '@angular/common/http';

export interface AppState {
  users: User[];
  error?: HttpErrorResponse;
}
