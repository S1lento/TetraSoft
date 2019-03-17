import { User } from './app.models';

export interface AppState {
    app: {
        users: User[]
    };
}
