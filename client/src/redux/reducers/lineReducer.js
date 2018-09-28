import {
//     ADD_BLOG,
//     AUTH_BLOG,
//     DELETE_BLOG,
//     INVALIDATE_BLOG,
//     REQUEST_BLOG,
    FETCH_LINES,
    SHOW_ERROR
} from '../actions/product/line';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            description: null,
            img: null,
            name: null,
            code: null,
        },
    ]
}

export default function lineReducer(state = initialState, { type, payload }) {
    switch (type) {
        // case ADD_BLOG:
        //     return payload.lines;
        // case AUTH_BLOG:
        //     return payload.lines;
        // case UPDATE_BLOG:
        //     return payload.lines;
        // case DELETE_BLOG:
        //     return payload.lines;
        case SHOW_ERROR:
            return payload.lines;
        // case REQUEST_BLOG:
        //     return payload.lines;
        case FETCH_LINES:
            return payload.lines;
        default:
            return state;
    }
};