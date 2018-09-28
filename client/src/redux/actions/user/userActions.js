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
export const LOGIN_SUCCESSFUL = 'user:userLogin';
export const AUTHENTICATION_ERROR = 'user:updateUser';
export const LOGIN_FAILED = 'user:updateUser';
export const LOGOUT_SUCCESSFUL = 'user:userLogout';

const instance = axios.create({ baseURL: '/api/v2/', headers: { "Content-Type": "application/json" } });

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


export function addUser(newUser) {
    return {
        type: ADD_USER,
        payload: { user: newUser },
    }
};

export function authUser(newUser) {
    return {
        type: AUTH_USER,
        payload: { user: newUser },
    }
};

export function updateUser(newUser = initialUser.user, token = initialUser.token, isAuthenticated = initialUser.isAuthenticated) {
    // console.log('----', newUser, isAuthenticated, token);
    return {
        type: UPDATE_USER,
        payload: {
            user: {
                user: newUser,
                token: token,
                isLoading: false,
                isAuthenticated: isAuthenticated
            },
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

export function showError(errors, id = null, password = null, last_login = null, is_superuser = true, username = "Guest", first_name = null, last_name = null, email = null, is_staff = null, is_active = null, date_joined = null) {
    return {
        type: SHOW_ERROR,
        payload: {
            user: {
                user: {
                    id: localStorage.getItem('user_id') || id,
                    password: localStorage.getItem('user_password') || password,
                    last_login: localStorage.getItem('user_last_login') || last_login,
                    is_superuser: localStorage.getItem('user_is_superuser') || is_superuser,
                    username: localStorage.getItem('user_username') || username,
                    first_name: localStorage.getItem('user_first_name') || first_name,
                    last_name: localStorage.getItem('user_last_name') || last_name,
                    email: localStorage.getItem('user_email') || email,
                    is_staff: localStorage.getItem('user_is_staff') || is_staff,
                    is_active: localStorage.getItem('user_is_active') || is_active,
                    date_joined: localStorage.getItem('user_date_joined') || date_joined
                },
                isLoading: false,
                isAuthenticated: false,
                token: localStorage.getItem("token") || null,
                errors: { errors },
            }
        }
    }
};

export function invalidateUser(user) {
    return {
        type: INVALIDATE_USER,
        payload: {
            user: user
        }
    }
};

export function requestUser(user) {
    return {
        type: REQUEST_USER,
        payload: {
            user: user
        }
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

export const userLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_password');
    localStorage.removeItem('user_last_login');
    localStorage.removeItem('user_is_superuser');
    localStorage.removeItem('user_username');
    localStorage.removeItem('user_first_name');
    localStorage.removeItem('user_last_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_is_staff');
    localStorage.removeItem('user_is_active');
    localStorage.removeItem('user_date_joined');
    return dispatch => {
        dispatch(
            {
                type: LOGOUT_SUCCESSFUL,
                payload: {
                    user: {
                        user: initialUser.user,
                        token: null,
                        isLoading: true,
                        isAuthenticated: false,
                        errors: {}
                    }
                }
            }
        );
    }
}

export const userRegister = (username = 'Guest', password = null, email = null) => {

    return dispatch => {
        instance.post(`auth/register/`, { username: username, password: password, email: email })
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('user_id', res.data.user.id);
                    localStorage.setItem('user_password', res.data.user.password);
                    localStorage.setItem('user_last_login', res.data.user.last_login);
                    localStorage.setItem('user_is_superuser', res.data.user.is_superuser);
                    localStorage.setItem('user_username', res.data.user.username);
                    localStorage.setItem('user_first_name', res.data.user.first_name);
                    localStorage.setItem('user_last_name', res.data.user.last_name);
                    localStorage.setItem('user_email', res.data.user.email);
                    localStorage.setItem('user_is_staff', res.data.user.is_staff);
                    localStorage.setItem('user_is_active', res.data.user.is_active);
                    localStorage.setItem('user_date_joined', res.data.user.date_joined);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('isAuthenticated', res.data.isAuthenticated);
                    dispatch(
                        {
                            type: LOGIN_SUCCESSFUL,
                            payload: {
                                user: {
                                    user: res.data.user,
                                    token: res.data.token,
                                    errors: {},
                                    isAuthenticated: true,
                                    isLoading: false
                                }
                            }
                        }
                    );
                } else if (res.status === 403 || res.status === 401 || res.status === 400) {
                    dispatch({
                        type: SHOW_ERROR,
                        payload: {
                            user: {
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
                                isAuthenticated: false,
                                isLoading: true,
                                errors: {
                                    type: res.status,
                                    message: 'Lo sentimos el usuario o contraseña que introdujo no son correctos, por favor vuelva a intentarlo.'
                                }
                            }
                        }
                    });
                } else if (res.status < 500) {
                    // console.log(res);
                    // return res.json().then(data => {
                    //     return { status: res.status, data };
                    // })
                } else {
                    // console.log(res);
                    // throw res;
                }
            })
            .catch(error => {
                dispatch({
                    type: SHOW_ERROR,
                    payload: {
                        user: {
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
                            isAuthenticated: false,
                            isLoading: true,
                            errors: {
                                type: error,
                                message: 'Lo sentimos el usuario o contraseña que introdujo no son correctos, por favor vuelva a intentarlo.'
                            }
                        }
                    }
                });
            })
    }
}

export const userLogin = (username = 'Guest', password = null) => {

    return dispatch => {
        instance.post(`auth/login/`, { username: username, password: password })
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('user_id', res.data.user.id);
                    localStorage.setItem('user_password', res.data.user.password);
                    localStorage.setItem('user_last_login', res.data.user.last_login);
                    localStorage.setItem('user_is_superuser', res.data.user.is_superuser);
                    localStorage.setItem('user_username', res.data.user.username);
                    localStorage.setItem('user_first_name', res.data.user.first_name);
                    localStorage.setItem('user_last_name', res.data.user.last_name);
                    localStorage.setItem('user_email', res.data.user.email);
                    localStorage.setItem('user_is_staff', res.data.user.is_staff);
                    localStorage.setItem('user_is_active', res.data.user.is_active);
                    localStorage.setItem('user_date_joined', res.data.user.date_joined);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('isAuthenticated', res.data.isAuthenticated);
                    dispatch(
                        {
                            type: LOGIN_SUCCESSFUL,
                            payload: {
                                user: {
                                    user: res.data.user,
                                    token: res.data.token,
                                    errors: {},
                                    isAuthenticated: true,
                                    isLoading: false,
                                }
                            }
                        }
                    );
                } else if (res.status === 403 || res.status === 401 || res.status === 400) {
                    dispatch({
                        type: SHOW_ERROR,
                        payload: {
                            user: {
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
                                isAuthenticated: false,
                                isLoading: true,
                                errors: {
                                    type: res.status,
                                    message: 'Lo sentimos el nombre de usuario o correo electrónico que introdujo ya existe, por favor vuelva a intentarlo.'
                                }
                            }
                        }
                    });
                    // throw res.data;
                } else if (res.status < 500) {
                    // console.log(res);
                    // return res.json().then(data => {
                    //     return { status: res.status, data };
                    // })
                } else {
                    // console.log(res);
                    // throw res;
                }
            })
            .catch(error => {
                dispatch({
                    type: SHOW_ERROR,
                    payload: {
                        user: {
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
                            isAuthenticated: false,
                            isLoading: true,
                            errors: {
                                type: error,
                                message: 'Lo sentimos el nombre de usuario o correo electrónico que introdujo ya existe, por favor vuelva a intentarlo.'
                            }
                        }
                    }
                });
            })
    }
}

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