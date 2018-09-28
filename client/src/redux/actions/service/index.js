import axios from 'axios';

export const ADD_SERVICE = 'service:addService';
export const UPDATE_SERVICE = 'service:updateService';
export const DELETE_SERVICE = 'service:deleteService';
export const REQUEST_SERVICE = 'service:requestService';
export const SHOW_ERROR = 'service:showError';
export const FETCH_SERVICES = 'services:fetchServices';
export const SHOW_SERVICES_ERROR = 'services:showServicesError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            name:null,
            title:null,
            content:null,
            slug:null,
            image:null,
            featured:null,
            position:null,
            background:null,
        },
    ]
}

export function addService(newUser) {
    return {
        type: ADD_SERVICE,
        payload: {
            service: newUser
        },
    }
};

export function updateService(newService) {
    return {
        type: UPDATE_SERVICE,
        payload: {
            service: newService
        },
    }
};

export function deleteService(service) {
    return {
        type: DELETE_SERVICE,
        payload: {
            service: service
        },
    }
};

export function showError(error){
    return {
        type: SHOW_SERVICES_ERROR,
        payload: {
            service: initialState,
            error: [error]
        }
    }
};
export function showServicesError(error){
    return {
        type: SHOW_SERVICES_ERROR,
        payload: {
            services: initialState,
            error: [error]
        }
    }
};

export const fetchServices = () => {

    return dispatch => {
        instance.get(`services/`)
            .then(res => {
                let services = res.data;
                // console.log(site);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_SERVICES,
                    payload: {
                        services: services
                    }
                })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}
