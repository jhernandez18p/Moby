import axios from 'axios';

export const ADD_QUESTION = 'question:addQuestion';
export const UPDATE_QUESTION = 'question:updateQuestion';
export const DELETE_QUESTION = 'question:deleteQuestion';
export const REQUEST_QUESTION = 'question:requestQuestion';
export const SHOW_ERROR = 'question:showError';

export const FETCH_QUESTIONS = 'questions:fetchQuestions';
export const SHOW_QUESTIONS_ERROR = 'questions:showQuestionsError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

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

export function addQuestion(newQuestion) {
    return {
        type: ADD_QUESTION,
        payload: {
            question: newQuestion
        },
    }
};

export function updateQuestion(newQuestion) {
    return {
        type: UPDATE_QUESTION,
        payload: {
            question: newQuestion
        },
    }
};

export function deleteQuestion(Question) {
    return {
        type: DELETE_QUESTION,
        payload: {
            question: Question
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            question: initialState,
            error: [error]
        }
    }
};

export function showQuestionsError(error){
    return {
        type: SHOW_QUESTIONS_ERROR,
        payload: {
            question: initialState,
            error: [error]
        }
    }
};

export const fetchQuestions = () => {

    return dispatch => {
        instance.get(`questions/`)
            .then(res => {
                let Questions = res.data;
                return dispatch({
                    type: FETCH_QUESTIONS,
                    payload: {
                        questions: Questions
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}