import { 
    ADD_BLOG_COMMENT, 
    AUTH_BLOG_COMMENT, 
    DELETE_BLOG_COMMENT, 
    INVALIDATE_BLOG_COMMENT, 
    REQUEST_BLOG_COMMENT, 
    UPDATE_BLOG_COMMENT,
    SHOW_ERROR
} from '../actions/blog/comment';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: null,
            name: null,
            description: null,
        },
    ]
}

export default function pagePositionReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_BLOG_COMMENT:
            return payload.page_position;
        case AUTH_BLOG_COMMENT:
            return payload.page_position;
        case UPDATE_BLOG_COMMENT:
            return payload.page_position;
        case DELETE_BLOG_COMMENT:
            return payload.page_position;
        case SHOW_ERROR:
            return payload.page_position;
        case REQUEST_BLOG_COMMENT:
            return payload.page_position;
        case INVALIDATE_BLOG_COMMENT:
            return payload.page_position;
        default:
            return state;
    }
};