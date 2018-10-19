import axios from 'axios';

export const ADD_ANSWER = 'answer:addAnswer';
export const UPDATE_ANSWER = 'answer:updateAnswer';
export const DELETE_ANSWER = 'answer:deleteAnswer';
export const REQUEST_ANSWER = 'answer:requestAnswer';
export const SHOW_ERROR = 'answer:showError';

export const FETCH_ANSWERS = 'answers:fetchAnswers';
export const SHOW_ANSWERS_ERROR = 'answers:showAnswersError';

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

export function addAnswer(newAnswer) {
    return {
        type: ADD_ANSWER,
        payload: {
            answer: newAnswer
        },
    }
};

export function updateAnswer(newAnswer) {
    return {
        type: UPDATE_ANSWER,
        payload: {
            answer: newAnswer
        },
    }
};

export function deleteAnswer(Question) {
    return {
        type: DELETE_ANSWER,
        payload: {
            answer: Question
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            answer: initialState,
            error: [error]
        }
    }
};

export function showAnswersError(error){
    return {
        type: SHOW_ANSWERS_ERROR,
        payload: {
            answers: initialState,
            error: [error]
        }
    }
};

export const requestAnswer = (id) => {

    return dispatch => {
        instance.get(`answers/${id}/`)
            .then(res => {
                let answers = res.data;
                return dispatch({
                    type: REQUEST_ANSWER,
                    payload: {
                        answers: answers
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}

export const fetchAnswers = () => {

    return dispatch => {
        instance.get(`answers/`)
            .then(res => {
                let answers = res.data;                
                return dispatch({
                    type: FETCH_ANSWERS,
                    payload: {
                        answers: answers
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}