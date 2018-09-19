import axios from 'axios';

export const ADD_TYPE = 'types:addType';
export const UPDATE_TYPE = 'types:updateType';
export const DELETE_TYPE = 'types:deleteType';
export const REQUEST_TYPE = 'types:requestType';
export const FETCH_TYPES = 'types:fetchTypes';
export const SHOW_ERROR = 'types:showError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState ={
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            logo: null,
            name: null,
            slug: null,
            website: null,
            code: null,
        },
    ]
}

export function addType(newType) {
    return {
        type: ADD_TYPE,
        payload: {
            types: newType
        },
    }
};

export function updateType(newType) {
    return {
        type: UPDATE_TYPE,
        payload: {
            types: newType
        },
    }
};

export function deleteType(Type) {
    return {
        type: DELETE_TYPE,
        payload: {
            types: Type
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            types: initialState,
            error: [error]
        }
    }
};

export const fetchTypes = () => {

    return dispatch => {
        instance.get(`types/`)
            .then(res => {
                let Types = res.data;
                return dispatch({
                    type: FETCH_TYPES,
                    payload: {
                        Types
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}