import { 
    ADD_USER,
    AUTH_USER,
    UPDATE_USER,
    DELETE_USER,
    SHOW_ERROR,
    REQUEST_USER,
    INVALIDATE_USER,
    LOADING_USER,
    LOADED_USER,
    LOGIN_SUCCESSFUL,
    AUTHENTICATION_ERROR,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL,
} from '../actions/user/userActions';

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

export default function userReducer (state = initialUser, { type, payload }) {
    switch (type) {
        case ADD_USER:
            return payload.user;

        case AUTH_USER:
            return payload.user;
        
        case UPDATE_USER:
            return payload.user;
        
        case DELETE_USER:
            return payload.user;
        
        case SHOW_ERROR:
            return payload.user;
        
        case REQUEST_USER:
            return payload.user;
        
        case INVALIDATE_USER:
            return payload.user;

        case LOADING_USER:
            return { ...state, isLoading: true };

        case LOADED_USER:
            return { ...state, isAuthenticated: true, isLoading: false, user: payload.user };

        case LOGIN_SUCCESSFUL:
            localStorage.setItem("token", payload.data.token);
            localStorage.setItem("refresh", payload.data.refresh);
            return { ...state, ...payload.data, isAuthenticated: true, isLoading: false, errors: null };

        case AUTHENTICATION_ERROR:
        case LOGIN_FAILED:
        case LOGOUT_SUCCESSFUL:
            localStorage.removeItem("token");
            return {
                ...state, errors: payload.data, token: null, user: null,
                isAuthenticated: false, isLoading: false
            };
        
        default:
            return state;
    }
};