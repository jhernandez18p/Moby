import axios from 'axios';

export const ADD_DEPARTMENT = 'departments:addDepartment';
export const UPDATE_DEPARTMENT = 'departments:updateDepartment';
export const DELETE_DEPARTMENT = 'departments:deleteDepartment';
export const REQUEST_DEPARTMENT = 'departments:requestDepartment';
export const FETCH_DEPARTMENTS = 'departments:fetchDepartments';
export const SHOW_ERROR = 'departments:showError';

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
            order: 0
        },
    ]
}

export function addDepartment(newDepartment) {
    return {
        type: ADD_DEPARTMENT,
        payload: {
            departments: newDepartment
        },
    }
};

export function updateDepartment(newDepartment) {
    return {
        type: UPDATE_DEPARTMENT,
        payload: {
            departments: newDepartment
        },
    }
};

export function deleteDepartment(Department) {
    return {
        type: DELETE_DEPARTMENT,
        payload: {
            departments: Department
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            departments: initialState,
            error: [error]
        }
    }
};

export const fetchDepartments = () => {

    return dispatch => {
        instance.get(`departments/`)
            .then(res => {
                let departments = res.data;
                return dispatch({
                    type: FETCH_DEPARTMENTS,
                    payload: {
                        departments
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}