import { User } from '../components/app/user.model';

export interface AppState {
    app: {
        users: User[]
    };
}
