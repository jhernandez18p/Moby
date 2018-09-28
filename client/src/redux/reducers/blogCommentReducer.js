import { 
    ADD_BLOG_COMMENT, 
    AUTH_BLOG_COMMENT, 
    DELETE_BLOG_COMMENT, 
    INVALIDATE_BLOG_COMMENT, 
    REQUEST_BLOG_COMMENT, 
    UPDATE_BLOG_COMMENT,
    FETCH_BLOG_COMMENTS,
    SHOW_ERROR
} from '../actions/blog/comment';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            content: null,
            approved: null,
            timestamp: null,
            object_id: null,
            author: null,
            parent: null,
            post: null,
            content_type: null,
        },
    ]
}

export default function blogCommentReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_BLOG_COMMENT:
            return payload.blog_comments;
        case AUTH_BLOG_COMMENT:
            return payload.blog_comments;
        case UPDATE_BLOG_COMMENT:
            return payload.blog_comments;
        case DELETE_BLOG_COMMENT:
            return payload.blog_comments;
        case SHOW_ERROR:
            return payload.blog_comments;
        case REQUEST_BLOG_COMMENT:
            return payload.blog_comments;
        case INVALIDATE_BLOG_COMMENT:
            return payload.blog_comments;
        case FETCH_BLOG_COMMENTS:
            return payload.blog_comments;
        default:
            return state;
    }
};