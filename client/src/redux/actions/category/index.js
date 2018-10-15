import axios from 'axios';

export const ADD_CATEGORY = 'category:addCategory';
export const REQUEST_CATEGORY = 'category:requestCategory';
export const UPDATE_CATEGORY = 'category:updateCategory';
export const DELETE_CATEGORY = 'category:deleteCategory';
export const SHOW_ERROR = 'category:showError';
export const FETCH_CATEGORY = 'category:fetchCategory';
export const SHOW_CATEGORIES_ERROR = 'categories:showCategoriesError';
export const FETCH_CATEGORIES = 'categories:fetchCategories';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: null,
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

export function deleteCategory(category) {
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

export const fetchCategory = (catID) => {

    return dispatch => {
        instance.get(`categories/${catID}/`)
            .then(res => {
                let category = res.data;
                console.log(catID);
                
                return dispatch({
                    type: FETCH_CATEGORY,
                    payload: {
                        category: category
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}

export function showCategoriesError(error){
    return {
        type: SHOW_CATEGORIES_ERROR,
        payload: {
            categories: initialState,
            error: [error]
        }
    }
};


export const fetchCategories = () => {

    return dispatch => {
        instance.get(`categories/?active=true`)
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
