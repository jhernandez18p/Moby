// import {
//     ADD_BLOG,
//     AUTH_BLOG,
//     DELETE_BLOG,
//     INVALIDATE_BLOG,
//     REQUEST_BLOG,
//     UPDATE_BLOG,
//     SHOW_ERROR
// } from '../actions/';

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
        //     return payload.colors;
        // case AUTH_BLOG:
        //     return payload.colors;
        // case UPDATE_BLOG:
        //     return payload.colors;
        // case DELETE_BLOG:
        //     return payload.colors;
        // case SHOW_ERROR:
        //     return payload.colors;
        // case REQUEST_BLOG:
        //     return payload.colors;
        // case INVALIDATE_BLOG:
        //     return payload.colors;
        default:
            return state;
    }
};