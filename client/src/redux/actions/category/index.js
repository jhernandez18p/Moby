import axios from 'axios';

export const ADD_CATEGORY = 'categories:addCategory';
export const REQUEST_CATEGORY = 'categories:requestCategory';
export const UPDATE_CATEGORY = 'categories:updateCategory';
export const DELETE_CATEGORY = 'categories:deleteCategory';
export const FETCH_CATEGORIES = 'categories:fetchCategories';
export const SHOW_ERROR = 'categories:showError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: "127.0.0.1:10500/api/v2/categories/?limit=20&offset=20",
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            name: null,
            slug: null,
            code: null,
            parent: null
        },
    ]
}

export function addCategory(newCategory) {
    return {
        type: ADD_CATEGORY,
        payload: {
            categories: newCategory
        },
    }
};

export function updateCategory(newCategory) {
    return {
        type: UPDATE_CATEGORY,
        payload: {
            categories: newCategory
        },
    }
};

export function deleteUser(category) {
    return {
        type: DELETE_CATEGORY,
        payload: {
            categories: category
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            categories: initialState,
            error: [error]
        }
    }
};


export const fetchCategories = () => {

    return dispatch => {
        instance.get(`categories/`)
            .then(res => {
                let categories = res.data;
                return dispatch({
                    type: FETCH_CATEGORIES,
                    payload: {
                        categories: categories
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}
