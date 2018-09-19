// import fetch from 'cross-fetch';
import axios from 'axios';

export const ADD_BLOG_COMMENT = 'comment:addBlogComment';
export const AUTH_BLOG_COMMENT = 'comment:authBlogComment';
export const DELETE_BLOG_COMMENT = 'comment:deleteBlogComment';
export const INVALIDATE_BLOG_COMMENT = 'comment:invalidateBlogComment';
export const REQUEST_BLOG_COMMENT = 'comment:requestBlogComment';
export const SHOW_ERROR = 'comment:showError';
export const UPDATE_BLOG_COMMENT = 'comment:updateBlogComment';
export const FETCH_BLOG_COMMENTS = 'comment:fetchBlogComment';

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

export function addBlogComment(newBlogComment) {
    return {
        type: ADD_BLOG_COMMENT,
        payload: {
            comment: newBlogComment
        },
    }
};

export function authBlogComment(newBlogComment) {
    return {
        type: AUTH_BLOG_COMMENT,
        payload: {
            comment: newBlogComment
        },
    }
};

export function updateBlogComment(newBlogComment) {
    return {
        type: UPDATE_BLOG_COMMENT,
        payload: {
            comment: newBlogComment
        },
    }
};

export function deleteBlogComment(BlogComment) {
    return {
        type: DELETE_BLOG_COMMENT,
        payload: {
            comment: BlogComment
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            comment: initialState,
            error: [error]
        }
    }
};

export const fetchBlogCommensts = () => {

    return dispatch => {
        instance.get(`comments/`)
            .then(res => {
                let comment = res.data;
                return dispatch({
                    type: FETCH_BLOG_COMMENTS,
                    payload: {
                        comment
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}
