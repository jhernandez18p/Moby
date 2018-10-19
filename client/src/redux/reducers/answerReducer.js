import { 
    ADD_ANSWER, 
    DELETE_ANSWER, 
    REQUEST_ANSWER, 
    UPDATE_ANSWER,
    SHOW_ERROR
} from '../actions/faq/answer';

const initialState = {
    id: 0,
    text: null,
    question: null
}

export default function answerReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ANSWER:
            return payload.answer;
        case UPDATE_ANSWER:
            return payload.answer;
        case DELETE_ANSWER:
            return payload.answer;
        case SHOW_ERROR:
            return payload.answer;
        case REQUEST_ANSWER:
            return payload.answer;
        default:
            return state;
    }
};