import axios from 'axios';

export const ADD_BLOG_POST = 'blog_post:addBlogPost';
export const AUTH_BLOG_POST = 'blog_post:authBlogPost';
export const DELETE_BLOG_POST = 'blog_post:deleteBlogPost';
export const REQUEST_BLOG_POST = 'blog_post:requestBlogPost';
export const SHOW_ERROR = 'blog_post:showError';
export const UPDATE_BLOG_POST = 'blog_post:updateBlogPost';
export const FETCH_BLOG_POST = 'blog_post:fetchBlogPost';


const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            title: null,
            sub_title: null,
            text: null,
            is_public: null,
            draft: null,
            published: null,
            read_time: null,
            updated: null,
            created_at: null,
            img: null,
            background: null,
            slug: null,
            author: null,
            updated_by: null,
        }
    ]
}

export function addBlogPost(newPost) {
    return {
        type: ADD_BLOG_POST,
        payload: {
            blog_post: newPost
        },
    }
};


export function updateBlogPost(newPost) {
    return {
        type: UPDATE_BLOG_POST,
        payload: {
            blog_post: newPost
        },
    }
};

export function deleteUser(post) {
    return {
        type: DELETE_BLOG_POST,
        payload: {
            blog_post: post
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            blog_post: initialState,
            error: [error]
        }
    }
};

export const fetchBlogPost = () => {
    return dispatch => {
        instance.get(`posts/`)
            .then(res => {
                let blog_post = res.data;
                return dispatch({ type: FETCH_BLOG_POST, payload: { blog_post } })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}


export const fetchNextBlogPost = (next = '/api/v2/posts/?limit=16&offset=16') => {
    return dispatch => {
        instance.get(next)
            .then(res => {
                let blog_post = res.data;
                return dispatch({ type: FETCH_BLOG_POST, payload: {blog_post} })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}

export const fetchPrevBlogPost = (prev = '/api/v2/posts/') => {
    return dispatch => {
        instance.get(prev)
            .then(res => {
                let blog_post = res.data;
                return dispatch({ type: FETCH_BLOG_POST, payload: { blog_post } })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}
