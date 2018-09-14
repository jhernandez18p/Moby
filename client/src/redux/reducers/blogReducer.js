import {
    ADD_BLOG_POST,
    AUTH_BLOG_POST,
    DELETE_BLOG_POST,
    REQUEST_BLOG_POST,
    UPDATE_BLOG_POST,
    FETCH_BLOG_POST,
    SHOW_ERROR
} from '../actions/blog';

// import data from '../../data';

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

export default function blogReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_BLOG_POST:
            return payload.blog_post;
        case AUTH_BLOG_POST:
            return payload.blog_post;
        case UPDATE_BLOG_POST:
            return payload.blog_post;
        case DELETE_BLOG_POST:
            return payload.blog_post;
        case SHOW_ERROR:
            return payload.blog_post;
        case REQUEST_BLOG_POST:
            return payload.blog_post;
        case FETCH_BLOG_POST:
            return payload.blog_post;
        default:
            return state;
    }
};