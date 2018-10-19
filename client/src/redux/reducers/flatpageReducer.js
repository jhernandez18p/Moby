import {
    ADD_FLATPAGE,
    DELETE_FLATPAGE,
    REQUEST_FLATPAGE,
    UPDATE_FLATPAGE,
    SHOW_ERROR
} from '../actions/flatpage';

const initialState = {
    id: 0,
    url: null,
    title: null,
    content: null,
    enable_comments: null,
    template_name: null,
    registration_required: null,
    sites: [1]
}

export default function colorReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FLATPAGE:
            return payload.flatpage;
        case UPDATE_FLATPAGE:
            return payload.flatpage;
        case DELETE_FLATPAGE:
            return payload.flatpage;
        case REQUEST_FLATPAGE:
            return payload.flatpage;
        case SHOW_ERROR:
            return payload.flatpage;
        default:
            return state;
    }
};