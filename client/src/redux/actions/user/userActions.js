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
    isAuthenticated: null, 
    token: localStorage.getItem("token"), 
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

export function showError( errors, id= null, password= null, last_login= null, is_superuser= true, username= "Guest", first_name= null, last_name= null, email= null, is_staff= null, is_active= null, date_joined= null) {
    return {
        type: SHOW_ERROR,
        payload: {
            user:{
                user: { 
                    id: id,
                    password: password,
                    last_login: last_login,
                    is_superuser: is_superuser,
                    username: username,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    is_staff: is_staff,
                    is_active: is_active,
                    date_joined: date_joined,
                }, 
                isLoading: true, 
                isAuthenticated: false, 
                token: localStorage.getItem("token"), 
                errors: {errors},
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
    return dispatch => {
        dispatch(
            {
                type: LOGOUT_SUCCESSFUL,
                payload: {
                    user: {
                        user: initialUser.user,
                        token: null,
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
                    console.log(res.data);
                    // console.log(res.data.token);
                    dispatch(
                        {
                            type: LOGIN_SUCCESSFUL,
                            payload: {
                                user: {
                                    user: res.data.user,
                                    token: res.data.token,
                                    errors: {},
                                    isAuthenticated: true
                                }
                            }
                        }
                    );
                    // return res.data;
                } else if (res.status === 403 || res.status === 401 || res.status === 400) {
                    // console.log(res);
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
                                errors: {
                                    type: res.status,
                                    message:'Lo sentimos el usuario o contraseña que introdujo no son correctos, por favor vuelva a intentarlo.'
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
                            errors: {
                                type: error,
                                message:'Lo sentimos el usuario o contraseña que introdujo no son correctos, por favor vuelva a intentarlo.'
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
                    dispatch(
                        {
                            type: LOGIN_SUCCESSFUL,
                            payload: {
                                user: {
                                    user: res.data.user,
                                    token: res.data.token,
                                    errors: {},
                                    isAuthenticated: true
                                }
                            }
                        }
                    );
                    // return res.data;
                } else if ( res.status === 403 || res.status === 401 || res.status === 400 ) {
                    // console.log(res);
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
                                errors: {
                                    type: res.status,
                                    message:'Lo sentimos el nombre de usuario o correo electrónico que introdujo ya existe, por favor vuelva a intentarlo.'
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
                            errors: {
                                type: error,
                                message:'Lo sentimos el nombre de usuario o correo electrónico que introdujo ya existe, por favor vuelva a intentarlo.'
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