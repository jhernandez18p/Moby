import { 
    ADD_QUESTION, 
    DELETE_QUESTION, 
    REQUEST_QUESTION, 
    UPDATE_QUESTION,
    SHOW_ERROR
} from '../actions/faq/question';

const initialState ={
    id: 0,
    title: null,
}

export default function questionsReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_QUESTION:
            return payload.question;
        case UPDATE_QUESTION:
            return payload.question;
        case DELETE_QUESTION:
            return payload.question;
        case REQUEST_QUESTION:
            return payload.question;
        case SHOW_ERROR:
            return payload.question;
        default:
            return state;
    }
};