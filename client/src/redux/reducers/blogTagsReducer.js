import {
    ADD_BLOG_TAG,
    AUTH_BLOG_TAG,
    DELETE_BLOG_TAG,
    REQUEST_BLOG_TAG,
    UPDATE_BLOG_TAG,
    FETCH_BLOG_TAGS,
    SHOW_ERROR
} from '../actions/blog/tags';

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

export default function blogTagsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_BLOG_TAG:
            return payload.blog_tags;
        case AUTH_BLOG_TAG:
            return payload.blog_tags;
        case UPDATE_BLOG_TAG:
            return payload.blog_tags;
        case DELETE_BLOG_TAG:
            return payload.blog_tags;
        case SHOW_ERROR:
            return payload.blog_tags;
        case REQUEST_BLOG_TAG:
            return payload.blog_tags;
        case FETCH_BLOG_TAGS:
            return payload.blog_tags;
        default:
            return state;
    }
};