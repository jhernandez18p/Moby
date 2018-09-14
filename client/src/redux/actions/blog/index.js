import axios from 'axios';

export const ADD_BLOG_POST = 'blog_post:addBlogPost';
export const AUTH_BLOG_POST = 'blog_post:authBlogPost';
export const DELETE_BLOG_POST = 'blog_post:deleteBlogPost';
export const REQUEST_BLOG_POST = 'blog_post:requestBlogPost';
export const SHOW_ERROR = 'blog_post:showError';
export const UPDATE_BLOG_POST = 'blog_post:updateBlogPost';
export const FETCH_BLOG_POST = 'blog_post:fetchBlogPost';


const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});

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
            blog_post: 'ERROR!!',
            error: [error]
        }
    }
};

export const fetchBlogPost = () => {
    
    return dispatch => {
        instance.get(`posts/`)
            .then(res => {
                let blog_post = res.data;
                // console.log(blog_post);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_BLOG_POST,
                    payload: {
                        blog_post
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}


export const fetchNextBlogPost = (next = 'http://localhost:10500/api/v2/posts/?limit=16&offset=16') => {

    // console.log(next);
    
    return dispatch => {
        axios.get(next, {headers: {"Content-Type": "application/json"}})
            .then(res => {
                let blog_post = res.data;
                // console.log(blog_post);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_BLOG_POST,
                    payload: {
                        blog_post
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}

export const fetchPrevBlogPost = (prev = 'http://localhost:10500/api/v2/posts/') => {
    
    // let _url = url || '';
    
    return dispatch => {
        axios.get(prev, {headers: {"Content-Type": "application/json"}})
            .then(res => {
                let blog_post = res.data;
                // console.log(blog_post);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_BLOG_POST,
                    payload: {
                        blog_post
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}
