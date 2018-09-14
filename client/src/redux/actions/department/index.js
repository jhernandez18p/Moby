import axios from 'axios';

export const ADD_DEPARTMENT = 'departments:addService';
export const UPDATE_DEPARTMENT = 'departments:updateService';
export const DELETE_DEPARTMENT = 'departments:deleteService';
export const REQUEST_DEPARTMENT = 'departments:requestService';
export const FETCH_DEPARTMENTS = 'departments:fetchServices';
export const SHOW_ERROR = 'departments:showError';

const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


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
            departments: 'ERROR!!',
            error: [error]
        }
    }
};

export const fetchDepartments = () => {

    return dispatch => {
        instance.get(`departments/`)
            .then(res => {
                let departments = res.data;
                // console.log(departments);
                // dispatch(requestDepartments(departments));
                return dispatch({
                    type: FETCH_DEPARTMENTS,
                    payload: {
                        departments
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}