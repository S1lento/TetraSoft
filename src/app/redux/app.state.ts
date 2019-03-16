import { User } from '../components/app/user.model'

export interface AppState {
    users: {
        users: User[]
    }
}