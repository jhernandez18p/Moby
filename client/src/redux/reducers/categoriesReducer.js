import {
    FETCH_CATEGORIES,
    SHOW_CATEGORIES_ERROR
} from '../actions/category';

const initialState = {
    count: 0,
    next: null,
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
        case SHOW_CATEGORIES_ERROR:
            return payload.categories;
        case FETCH_CATEGORIES:
            return payload.categories;
        default:
            return state;
    }
};