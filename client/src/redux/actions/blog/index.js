import axios from 'axios';

export const ADD_BLOG_POST = 'blog_post:addBlogPost';
export const AUTH_BLOG_POST = 'blog_post:authBlogPost';
export const DELETE_BLOG_POST = 'blog_post:deleteBlogPost';
export const REQUEST_BLOG_POST = 'blog_post:requestBlogPost';
export const SHOW_BLOG_POSTS_ERROR = 'blog_posts:showPostsError';
export const SHOW_ERROR = 'blog_post:showError';
export const UPDATE_BLOG_POST = 'blog_post:updateBlogPost';
export const FETCH_BLOG_POSTS = 'blog_posts:fetchBlogPost';


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

const initialPost = {
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

export function showPostsError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            blog_post: initialState,
            error: [error]
        }
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            blog_post: initialPost,
            error: [error]
        }
    }
};

export const requestBlogPost = (slug) => {
    return dispatch => {
        instance.get(`posts/${slug}/`)
            .then(res => {
                let blog_post = res.data;
                return dispatch({ type: REQUEST_BLOG_POST, payload: { blog_post: blog_post } })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}

export const fetchBlogPost = () => {
    return dispatch => {
        instance.get(`posts/?limit=16`)
            .then(res => {
                let blog_post = res.data;
                return dispatch({ type: FETCH_BLOG_POSTS, payload: { blog_posts: blog_post } })
            })
            .catch(error => { dispatch(showPostsError(error)); })
    }
}


export const fetchNextBlogPost = (limit = 16, offset=16) => {
    let url = `posts/?limit=${limit}&offset=${offset}`;
    return dispatch => {
        instance.get(url)
        .then(res => {
                return dispatch({ type: FETCH_BLOG_POSTS, payload: {blog_posts: res.data} })
            })
            .catch(error => { dispatch(showPostsError( error )); })
    }
}

export const fetchPrevBlogPost = (limit = 16, offset=0) => {
    let url = `posts/?limit=${limit}&offset=${offset}`;
    return dispatch => {
        instance.get(url)
            .then(res => {
                return dispatch({ type: FETCH_BLOG_POSTS, payload: { blog_posts: res.data } })
            })
            .catch(error => { dispatch(showPostsError( error )); })
    }
}
