import {
    FETCH_FLATPAGES,
    SHOW_FLATPAGES_ERROR
} from '../actions/flatpage';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            url: null,
            title: null,
            content: null,
            enable_comments: null,
            template_name: null,
            registration_required: null,
            sites: [1]
        }
    ]
}

export default function colorReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SHOW_FLATPAGES_ERROR:
            return payload.flatpages;
        case FETCH_FLATPAGES:
            return payload.flatpages;
        default:
            return state;
    }
};