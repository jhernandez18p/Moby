import {
    ADD_BLOG_TAG,
    AUTH_BLOG_TAG,
    DELETE_BLOG_TAG,
    REQUEST_BLOG_TAG,
    UPDATE_BLOG_TAG,
    FETCH_BLOG_SINGLE_TAG,
    SHOW_ERROR
} from '../actions/blog/tags';

const initialState = {
    id: 0,
    title: null,
    slug: null,
    created_at: null,
    author: null,
    updated_by: null,
}

export default function blogTagsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_BLOG_TAG:
            return payload.blog_tag;
        case AUTH_BLOG_TAG:
            return payload.blog_tag;
        case UPDATE_BLOG_TAG:
            return payload.blog_tag;
        case DELETE_BLOG_TAG:
            return payload.blog_tag;
        case SHOW_ERROR:
            return payload.blog_tag;
        case REQUEST_BLOG_TAG:
            return payload.blog_tag;
        case FETCH_BLOG_SINGLE_TAG:
            return payload.blog_tag;
        default:
            return state;
    }
};