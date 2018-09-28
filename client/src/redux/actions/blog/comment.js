// import fetch from 'cross-fetch';
import axios from 'axios';

export const ADD_BLOG_COMMENT = 'blog_comments:addBlogComment';
export const AUTH_BLOG_COMMENT = 'blog_comments:authBlogComment';
export const DELETE_BLOG_COMMENT = 'blog_comments:deleteBlogComment';
export const INVALIDATE_BLOG_COMMENT = 'blog_comments:invalidateBlogComment';
export const REQUEST_BLOG_COMMENT = 'blog_comments:requestBlogComment';
export const SHOW_ERROR = 'blog_comments:showError';
export const UPDATE_BLOG_COMMENT = 'blog_comments:updateBlogComment';
export const FETCH_BLOG_COMMENTS = 'blog_comments:fetchBlogCommensts';

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
            blog_comments: newBlogComment
        },
    }
};

export function authBlogComment(newBlogComment) {
    return {
        type: AUTH_BLOG_COMMENT,
        payload: {
            blog_comments: newBlogComment
        },
    }
};

export function updateBlogComment(newBlogComment) {
    return {
        type: UPDATE_BLOG_COMMENT,
        payload: {
            blog_comments: newBlogComment
        },
    }
};

export function deleteBlogComment(BlogComment) {
    return {
        type: DELETE_BLOG_COMMENT,
        payload: {
            blog_comments: BlogComment
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            blog_comments: initialState,
            error: [error]
        }
    }
};

export const fetchBlogCommensts = (post = null) => {
    let url = 'comments/';
    if ( post !== null ) { url = `comments/?post=${post}`; };
    return dispatch => {
        instance.get(url)
            .then(res => {
                let comment = res.data;
                return dispatch({
                    type: FETCH_BLOG_COMMENTS,
                    payload: {
                        blog_comments: comment
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}
