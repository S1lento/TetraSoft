import { Users } from './app.interfaces';
import { USER_ACTIONS, GetUsers } from './app.actions';

const initialState: Users = {
    users: [
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      },
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      },
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      },
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      },
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      }
      ,
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      },
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      },
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      },
      {
        avatar: 'https://vk.com/images/camera_400.png', id: 1, firstName: 'John', lastName: 'Cena'
      }
    ]
};

export function appReducer(state = initialState, action: GetUsers) {
    switch (action.type) {
        case USER_ACTIONS.GET_USERS:
            return {
                ...state,
                users: [...state.users]
            };
            break;
        default: state;
    }
}
