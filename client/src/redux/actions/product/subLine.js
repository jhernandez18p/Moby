import axios from 'axios';

export const ADD_SUB_LINE = 'sublines:addSubLine';
export const UPDATE_SUB_LINE = 'sublines:updateSubLine';
export const DELETE_SUB_LINE = 'sublines:deleteSubLine';
export const REQUEST_SUB_LINE = 'sublines:requestSubLine';
export const FETCH_SUB_LINES = 'sublines:fetchSubLines';
export const SHOW_ERROR = 'sublines:showError';

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

export function addSubLine(newSubLine) {
    return {
        type: ADD_SUB_LINE,
        payload: {
            sublines: newSubLine
        },
    }
};

export function updateSubLine(newSubLine) {
    return {
        type: UPDATE_SUB_LINE,
        payload: {
            sublines: newSubLine
        },
    }
};

export function deleteSubLine(SubLine) {
    return {
        type: DELETE_SUB_LINE,
        payload: {
            sublines: SubLine
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            sublines: initialState,
            error: [error]
        }
    }
};

export const fetchSubLines = () => {

    return dispatch => {
        instance.get(`sublines/?active=true`)
            .then(res => {
                let SubLines = res.data;
                return dispatch({
                    type: FETCH_SUB_LINES,
                    payload: {
                        SubLines
                    }
                })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}