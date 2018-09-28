import {
    FETCH_BLOG_POSTS,
    SHOW_BLOG_POSTS_ERROR
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
        case SHOW_BLOG_POSTS_ERROR:
            return payload.blog_posts;
        case FETCH_BLOG_POSTS:
            return payload.blog_posts;
        default:
            return state;
    }
};