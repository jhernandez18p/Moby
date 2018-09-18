// import fetch from 'cross-fetch';
import axios from 'axios';

export const ADD_USER = 'user:addUser';
export const AUTH_USER = 'user:authUser';
export const DELETE_USER = 'user:deleteUser';
export const INVALIDATE_USER = 'user:invalidateUser';
export const REQUEST_USER = 'user:requestUser';
export const SHOW_ERROR = 'user:showError';
export const UPDATE_USER = 'user:updateUser';
export const LOADING_USER = 'user:updateUser';
export const LOADED_USER = 'user:updateUser';
export const LOGIN_SUCCESSFUL = 'user:updateUser';
export const AUTHENTICATION_ERROR = 'user:updateUser';
export const LOGIN_FAILED = 'user:updateUser';
export const LOGOUT_SUCCESSFUL = 'user:updateUser';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

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

export function addUser(newUser) {
    return {
        type: ADD_USER,
        payload: {
            user: newUser
        },
    }
};

export function authUser(newUser) {
    return {
        type: AUTH_USER,
        payload: {
            user: newUser
        },
    }
};

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        },
    }
};

export function deleteUser(User) {
    return {
        type: DELETE_USER,
        payload: {
            user: User
        },
    }
};

export function showError(error) {
    return {
        type: SHOW_ERROR,
        payload: {
            user: initialUser,
            error: [error]
        }
    }
};

export function apiRequest(id) {
    return dispatch => {
        instance.get(`users/${id}/`)
            .then(res => {
                const person = res.data;
                console.log('SUCCESS');
                dispatch(updateUser(person.name));
            })
            .catch(error => {
                dispatch(showError('error'));
            })
    }
};

export function invalidateUser(user) {
    return {
        type: INVALIDATE_USER,
        user
    }
};

export function requestUser(user) {
    return {
        type: REQUEST_USER,
        user
    }
};

export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'USER_LOADING' });

        // const token = getState().auth.token;

        // if (token) {
        //     headers["Authorization"] = `Token ${token}`;
        // }
        return instance("/auth/user/")
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'USER_LOADED', user: res.data });
                    return res.data;
                } else if (res.status >= 400 && res.status < 500) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                }
            })
    }
}

export const register = () => {

}

export const logout = () => {

}

export const login = (username, password) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ username, password });

        return fetch("/api/auth/login/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: LOGIN_SUCCESSFUL, data: res.data });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: AUTHENTICATION_ERROR, data: res.data });
                    throw res.data;
                } else {
                    dispatch({ type: LOGIN_FAILED, data: res.data });
                    throw res.data;
                }
            })
    }
}