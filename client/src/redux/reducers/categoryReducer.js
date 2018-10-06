import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    REQUEST_CATEGORY,
    UPDATE_CATEGORY,
    FETCH_CATEGORY,
    SHOW_ERROR
} from '../actions/category';

const initialState = {
    id: 0,
    background: null,
    description: null,
    img: null,
    name: null,
    slug: null,
    code: null,
    parent: null
}

export default function categoryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CATEGORY:
            return payload.category;
        case UPDATE_CATEGORY:
            return payload.category;
        case DELETE_CATEGORY:
            return payload.category;
        case SHOW_ERROR:
            return payload.category;
        case REQUEST_CATEGORY:
            return payload.category;
        case FETCH_CATEGORY:
            return payload.category;
        default:
            return state;
    }
};