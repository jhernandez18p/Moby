import axios from 'axios';

export const ADD_BLOG_TAG = 'blog_tags:addBlogTag';
export const AUTH_BLOG_TAG = 'blog_tags:authBlogTag';
export const DELETE_BLOG_TAG = 'blog_tags:deleteBlogTag';
export const REQUEST_BLOG_TAG = 'blog_tags:requestBlogTag';
export const SHOW_ERROR = 'blog_tags:showError';
export const UPDATE_BLOG_TAG = 'blog_tags:updateBlogTag';
export const FETCH_BLOG_TAGS = 'blog_tags:fetchBlogTags';

const instance = axios.create({ baseURL: 'http://127.0.0.1:10500/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            title: null,
            slug: null,
            created_at: null,
            author: null,
            updated_by: null,
        }
    ]
}

export function addBlogTag(newTag) {
    return {
        type: ADD_BLOG_TAG,
        payload: {
            blog_tags: newTag
        },
    }
};


export function updateBlogTag(newTag) {
    return {
        type: UPDATE_BLOG_TAG,
        payload: {
            blog_tags: newTag
        },
    }
};

export function deleteUser(tag) {
    return {
        type: DELETE_BLOG_TAG,
        payload: {
            blog_tags: tag
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            blog_tags: initialState,
            error: [error]
        }
    }
};

export const fetchBlogTags = () => {
    
    return dispatch => {
        instance.get(`tags/`)
            .then(res => {
                let blog_tags = res.data;
                // console.log(blog_tags);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_BLOG_TAGS,
                    payload: {
                        blog_tags
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}