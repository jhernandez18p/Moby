import { 
    ADD_BLOG_COMMENT, 
    AUTH_BLOG_COMMENT, 
    DELETE_BLOG_COMMENT, 
    INVALIDATE_BLOG_COMMENT, 
    REQUEST_BLOG_COMMENT, 
    UPDATE_BLOG_COMMENT,
    SHOW_ERROR
} from '../actions/blog/comment';

// import data from '../../data';

export default function blogCommentReducer (state = {}, { type, payload }) {
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
        default:
            return state;
    }
};