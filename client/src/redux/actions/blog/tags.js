import axios from 'axios';

export const ADD_BLOG_TAG = 'blog_tag:addBlogTag';
export const AUTH_BLOG_TAG = 'blog_tag:authBlogTag';
export const DELETE_BLOG_TAG = 'blog_tag:deleteBlogTag';
export const REQUEST_BLOG_TAG = 'blog_tag:requestBlogTag';
export const UPDATE_BLOG_TAG = 'blog_tag:updateBlogTag';
export const SHOW_ERROR = 'blog_tag:showError';
export const SHOW_TAGS_ERROR = 'blog_tags:showTagsError';
export const FETCH_BLOG_TAGS = 'blog_tags:fetchBlogTags';
export const FETCH_BLOG_SINGLE_TAG = 'blog_tag:fetchBlogSingleTag';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

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
            blog_tag: newTag
        },
    }
};


export function updateBlogTag(newTag) {
    return {
        type: UPDATE_BLOG_TAG,
        payload: {
            blog_tag: newTag
        },
    }
};

export function deleteUser(tag) {
    return {
        type: DELETE_BLOG_TAG,
        payload: {
            blog_tag: tag
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            blog_tag: initialState,
            error: [error]
        }
    }
};

export function showTagsError(error){
    return {
        type: SHOW_TAGS_ERROR,
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
            .catch(error => { dispatch(showTagsError(error)); })
    }
}

export const fetchBlogSingleTag = (tagID) => {
    // console.log(tagID);
    return dispatch => {
        instance.get(`tags/${tagID}/`)
            .then(res => {
                let blog_tag = res.data;
                // console.log(blog_tag);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_BLOG_SINGLE_TAG,
                    payload: {
                        blog_tag:blog_tag
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}