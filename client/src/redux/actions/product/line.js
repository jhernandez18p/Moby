import axios from 'axios';

export const ADD_LINE = 'line:addLine';
export const REQUEST_LINE = 'line:fetchSingleLine';
export const UPDATE_LINE = 'line:updateLine';
export const DELETE_LINE = 'line:deleteLine';
export const FETCH_LINES = 'lines:fetchLines';
export const SHOW_ERROR = 'lines:showError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            description: null,
            img: null,
            name: null,
            code: null,
        },
    ]
}

const singleLine = {
    id: 0,
    description: null,
    img: null,
    name: null,
    code: null,
}

export function addLine(newLine) {
    return {
        type: ADD_LINE,
        payload: {
            line: singleLine,
            lines: newLine
        },
    }
};

export function updateLine(newLine) {
    return {
        type: UPDATE_LINE,
        payload: {
            line: newLine
        },
    }
};

export function deleteLine(Line) {
    return {
        type: DELETE_LINE,
        payload: {
            line: singleLine,
            lines: Line
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            line: singleLine,
            lines: initialState,
            error: [error]
        }
    }
};

export const fetchSingleLine = (slug) => {

    return dispatch => {
        instance.get(`lines/${slug}/`)
            .then(res => {
                let line = res.data;
                return dispatch({
                    type: REQUEST_LINE,
                    payload: {
                        line: line
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}

export const fetchLines = ( params = '', offset = 0 ) => {

    let _offset = offset;
    let page = '';
    let hasParams = '';
    if (_offset >= 1){
        _offset = offset * 20;
        page = `&offset=${_offset}?active=true`;
    }
    let url = 'lines/';
    if (params !== ''){
        let newUrl = params.split('?');
        hasParams = newUrl[1];
    }
    let _url = `${url}?${hasParams}${page}`;

    return dispatch => {
        instance.get(_url)
            .then(res => {
                let lines = res.data;
                return dispatch({
                    type: FETCH_LINES,
                    payload: {
                        lines: lines
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}

