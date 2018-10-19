import { 
    FETCH_QUESTIONS,
    SHOW_QUESTIONS_ERROR
} from '../actions/faq/question';

// import data from '../../data';

const initialState ={
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            title: null,
        }
    ]
}

export default function questionsReducer (state = initialState, { type, payload }) {
    switch (type) {
        case SHOW_QUESTIONS_ERROR:
            return payload.questions;
        case FETCH_QUESTIONS:
            return payload.questions;
        default:
            return state;
    }
};