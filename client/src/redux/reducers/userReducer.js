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

const initialUser = {
    user: {
        id: localStorage.getItem('user_id') || null,
        password: localStorage.getItem('user_password') || null,
        last_login: localStorage.getItem('user_last_login') || null,
        is_superuser: localStorage.getItem('user_is_superuser') || true,
        username: localStorage.getItem('user_username') || "Guest",
        first_name: localStorage.getItem('user_first_name') || null,
        last_name: localStorage.getItem('user_last_name') || null,
        email: localStorage.getItem('user_email') || null,
        is_staff: localStorage.getItem('user_is_staff') || null,
        is_active: localStorage.getItem('user_is_active') || null,
        date_joined: localStorage.getItem('user_date_joined') || null
    },
    isLoading: true,
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
    token: localStorage.getItem("token") || null,
    errors: {},
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
            localStorage.setItem("token", payload.user.token);
            localStorage.setItem("isAuthenticated", payload.user.isAuthenticated);
            return payload.user;
        case AUTHENTICATION_ERROR:
        case LOGIN_FAILED:
        case LOGOUT_SUCCESSFUL:
            localStorage.removeItem("token");
            localStorage.removeItem("isAuthenticated");
            return { ...state, ...payload.user };
        default:
            return state;
    }
};