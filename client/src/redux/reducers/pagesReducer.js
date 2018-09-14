import { 
    ADD_PAGE,
    REQUEST_PAGE,
    DELETE_PAGE,
    UPDATE_PAGE,
    FETCH_PAGES,
    SHOW_ERROR
} from '../actions/pages';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            name: null,
            description: null,
            have_icon: null,
            url: null,
        },
    ]
}

export default function pagesReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_PAGE:
            return payload.pages;
        case UPDATE_PAGE:
            return payload.pages;
        case DELETE_PAGE:
            return payload.pages;
        case SHOW_ERROR:
            return payload.pages;
        case REQUEST_PAGE:
            return payload.pages;
        case FETCH_PAGES:
            return payload.pages;
        default:
            return state;
    }
};