import { 
    ADD_USER, 
    AUTH_USER, 
    DELETE_USER, 
    INVALIDATE_USER, 
    REQUEST_USER, 
    UPDATE_USER,
    SHOW_ERROR
} from '../actions/user/userActions';

// import data from '../../data';

const initialUser = {
    user: {
        id: null,
        password: null,
        last_login: null,
        is_superuser: true,
        username: "Guest",
        first_name: null,
        last_name: null,
        email: null,
        is_staff: null,
        is_active: null,
        date_joined: null
    },
    isLoading: true,
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
    token: localStorage.getItem("token") || null,
    errors: {},
};

export default function usersReducer (state = initialUser, { type, payload }) {
    switch (type) {
        case ADD_USER:
            return payload.users;
        case AUTH_USER:
            return payload.users;
        case UPDATE_USER:
            return payload.users;
        case DELETE_USER:
            return payload.users;
        case SHOW_ERROR:
            return payload.users;
        case REQUEST_USER:
            return payload.users;
        case INVALIDATE_USER:
            return payload.users;
        default:
            return state;
    }
};