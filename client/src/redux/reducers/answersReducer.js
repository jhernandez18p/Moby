import {
    FETCH_ANSWERS,
    SHOW_ANSWERS_ERROR
} from '../actions/faq/answer';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            text: null,
            question: null
        }
    ]
}

export default function answerReducer (state = initialState, { type, payload }) {
    switch (type) {
        case SHOW_ANSWERS_ERROR:
            return payload.answers;
        case FETCH_ANSWERS:
            return payload.answers;
        default:
            return state;
    }
};