import axios from 'axios';

export const ADD_CATEGORY = 'category:addCategory';
export const REQUEST_CATEGORY = 'category:requestCategory';
export const UPDATE_CATEGORY = 'category:updateCategory';
export const DELETE_CATEGORY = 'category:deleteCategory';
export const FETCH_CATEGORIES = 'category:fetchCategories';
export const SHOW_ERROR = 'category:showError';

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
            category: newCategory
        },
    }
};

export function updateCategory(newCategory) {
    return {
        type: UPDATE_CATEGORY,
        payload: {
            category: newCategory
        },
    }
};

export function deleteUser(category) {
    return {
        type: DELETE_CATEGORY,
        payload: {
            category: category
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            category: initialState,
            error: [error]
        }
    }
};


export const fetchCategories = () => {

    return dispatch => {
        instance.get(`categories/`)
            .then(res => {
                let services = res.data;
                return dispatch({
                    type: FETCH_CATEGORIES,
                    payload: {
                        services
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}
