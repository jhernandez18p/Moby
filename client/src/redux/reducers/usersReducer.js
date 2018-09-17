import { 
    ADD_USER, 
    AUTH_USER, 
    DELETE_USER, 
    INVALIDATE_USER, 
    REQUEST_USER, 
    UPDATE_USER,
    SHOW_ERROR
} from '../actions/userActions';

// import data from '../../data';

const initialUser = {
    token: localStorage.getItem("token"),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    isLoading: true,
    user: null,
    errors: {},
    last_login: null,
    is_superuser: false,
    username: "Guest",
    first_name: "",
    last_name: "",
    email: null,
    is_staff: false,
    is_active: false,
    date_joined: null
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