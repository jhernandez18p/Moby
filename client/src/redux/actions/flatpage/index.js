import axios from 'axios';

export const ADD_FLATPAGE = 'flatpage:addFlatpage';
export const UPDATE_FLATPAGE = 'flatpage:updateFlatpage';
export const DELETE_FLATPAGE = 'flatpage:deleteFlatpage';
export const REQUEST_FLATPAGE = 'flatpage:requestFlatpage';
export const SHOW_ERROR = 'flatpage:showError';

export const FETCH_FLATPAGES = 'flatpages:fetchFlatpages';
export const SHOW_FLATPAGES_ERROR = 'flatpages:showFlatpagesError';

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

export function addFlatpage(newFlatpage) {
    return {
        type: ADD_FLATPAGE,
        payload: {
            flatpage: newFlatpage
        },
    }
};

export function updateFlatpage(newFlatpage) {
    return {
        type: UPDATE_FLATPAGE,
        payload: {
            flatpage: newFlatpage
        },
    }
};

export function deleteFlatpage(Question) {
    return {
        type: DELETE_FLATPAGE,
        payload: {
            flatpage: Question
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            flatpage: initialState,
            error: [error]
        }
    }
};

export function showFlatpagesError(error){
    return {
        type: SHOW_FLATPAGES_ERROR,
        payload: {
            flatpages: initialState,
            error: [error]
        }
    }
};

export const requestFlatpage = (title) => {

    return dispatch => {
        instance.get(`flatpages/${title}/`)
            .then(res => {
                let flatpage = res.data;
                return dispatch({
                    type: REQUEST_FLATPAGE,
                    payload: {
                        flatpage: flatpage
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}

export const fetchFlatpages = () => {

    return dispatch => {
        instance.get(`flatpages/`)
            .then(res => {
                let flatpages = res.data;                
                return dispatch({
                    type: FETCH_FLATPAGES,
                    payload: {
                        flatpages: flatpages
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}