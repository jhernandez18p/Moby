import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    REQUEST_CATEGORY,
    UPDATE_CATEGORY,
    FETCH_CATEGORIES,
    SHOW_ERROR
} from '../actions/category';

const initialState = {
    count: 0,
    next: "http://localhost:10500/api/v2/categories/?limit=20&offset=20",
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            name: null,
            slug: null,
            code: null,
            parent: null
        },
    ]
}

export default function categoryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CATEGORY:
            return payload.categories;
        case UPDATE_CATEGORY:
            return payload.categories;
        case DELETE_CATEGORY:
            return payload.categories;
        case SHOW_ERROR:
            return payload.categories;
        case REQUEST_CATEGORY:
            return payload.categories;
        case FETCH_CATEGORIES:
            return payload.categories;
        default:
            return state;
    }
};