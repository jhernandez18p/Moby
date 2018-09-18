// import fetch from 'cross-fetch';
import axios from 'axios';

export const ADD_BLOG_COMMENT = 'product:addProduct';
export const AUTH_BLOG_COMMENT = 'product:authProduct';
export const DELETE_BLOG_COMMENT = 'product:deleteProduct';
export const INVALIDATE_BLOG_COMMENT = 'product:invalidateProduct';
export const REQUEST_BLOG_COMMENT = 'product:requestProduct';
export const SHOW_ERROR = 'product:showError';
export const UPDATE_BLOG_COMMENT = 'product:updateProduct';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            content: null,
            approved: null,
            timestamp: null,
            object_id: null,
            author: null,
            parent: null,
            post: null,
            content_type: null,
        },
    ]
}

export function addUser(newUser) {
    return {
        type: ADD_BLOG_COMMENT,
        payload: {
            product: newUser
        },
    }
};

export function authUser(newUser) {
    return {
        type: AUTH_BLOG_COMMENT,
        payload: {
            product: newUser
        },
    }
};

export function updateUser(newUser) {
    return {
        type: UPDATE_BLOG_COMMENT,
        payload: {
            product: newUser
        },
    }
};

export function deleteUser(User) {
    return {
        type: DELETE_BLOG_COMMENT,
        payload: {
            product: User
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            product: initialState,
            error: [error]
        }
    }
};

export function apiRequest(){    
    return dispatch => {
        instance.get(`users/1`)
            .then(res => {
                const person = res.data;
                console.log('SUCCESS');
                dispatch(updateUser(person.name));
            })
            .catch(error => { dispatch(showError(error)); })
            // .then(function () {
            //     dispatch(requestUser());
            //     console.log('Axios acction');
            // });
    }
};

export function invalidateUser(user) {
    return {
        type: INVALIDATE_BLOG_COMMENT,
        user
    }
};

export function requestUser(user) {
    return {
        type: REQUEST_BLOG_COMMENT,
        user
    }
};