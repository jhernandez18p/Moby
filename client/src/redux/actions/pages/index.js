import axios from 'axios';

export const ADD_PAGE = 'pages:addPage';
export const UPDATE_PAGE = 'pages:updatePage';
export const DELETE_PAGE = 'pages:deletePage';
export const REQUEST_PAGE = 'pages:requestPage';
export const FETCH_PAGES = 'pages:fetchPages';
export const SHOW_ERROR = 'pages:showError';

const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


export function addPage(newPage) {
    return {
        type: ADD_PAGE,
        payload: {
            pages: newPage
        },
    }
};

export function updatePage(newPage) {
    return {
        type: UPDATE_PAGE,
        payload: {
            pages: newPage
        },
    }
};

export function deletePage(Page) {
    return {
        type: DELETE_PAGE,
        payload: {
            pages: Page
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            pages: 'ERROR!!',
            error: [error]
        }
    }
};

export const fetchPages = () => {

    return dispatch => {
        instance.get(`pages/`)
            .then(res => {
                let pages = res.data;
                // console.log(pages);
                // dispatch(requestcarousels(pages));
                return dispatch({
                    type: FETCH_PAGES,
                    payload: {
                        pages
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}