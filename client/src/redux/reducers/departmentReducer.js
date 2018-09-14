import {
    ADD_DEPARTMENT,
    DELETE_DEPARTMENT,
    REQUEST_DEPARTMENT,
    UPDATE_DEPARTMENT,
    FETCH_DEPARTMENTS,
    SHOW_ERROR
} from '../actions/department';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 1,
            background: null,
            description: null,
            img: null,
            name: null,
            slug: null,
            code: null,
            order: 0
        },
    ]
}

export default function colorReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_DEPARTMENT:
            return payload.departments;
        case UPDATE_DEPARTMENT:
            return payload.departments;
        case DELETE_DEPARTMENT:
            return payload.departments;
        case SHOW_ERROR:
            return payload.departments;
        case REQUEST_DEPARTMENT:
            return payload.departments;
        case FETCH_DEPARTMENTS:
            return payload.departments;
        default:
            return state;
    }
};