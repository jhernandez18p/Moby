import axios from 'axios';

export const ADD_CATEGORY = 'category:addCategory';
export const REQUEST_CATEGORY = 'category:requestCategory';
export const UPDATE_CATEGORY = 'category:updateCategory';
export const DELETE_CATEGORY = 'category:deleteCategory';
export const FETCH_CATEGORIES = 'category:fetchCategories';
export const SHOW_ERROR = 'category:showError';

const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});

export function addCategory(newCategory) {
    return {
        type: ADD_CATEGORY,
        payload: {
            category: newCategory
        },
    }
};

export function updateUser(newCategory) {
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
            category: 'ERROR!!',
            error: [error]
        }
    }
};


export const fetchCategories = () => {

    return dispatch => {
        instance.get(`categories/`)
            .then(res => {
                let services = res.data;
                // console.log(site);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_CATEGORIES,
                    payload: {
                        services
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}
