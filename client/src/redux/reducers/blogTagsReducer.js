import {
    FETCH_BLOG_TAGS,
    SHOW_TAGS_ERROR
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
        case SHOW_TAGS_ERROR:
            return payload.blog_tags;
        case FETCH_BLOG_TAGS:
            return payload.blog_tags;
        default:
            return state;
    }
};