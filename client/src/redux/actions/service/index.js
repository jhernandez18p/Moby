import axios from 'axios';

export const ADD_SERVICE = 'services:addService';
export const UPDATE_SERVICE = 'services:updateService';
export const DELETE_SERVICE = 'services:deleteService';
export const REQUEST_SERVICE = 'services:requestService';
export const FETCH_SERVICES = 'services:fetchServices';
export const SHOW_ERROR = 'services:showError';

const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});

export function addService(newUser) {
    return {
        type: ADD_SERVICE,
        payload: {
            services: newUser
        },
    }
};

export function updateService(newService) {
    return {
        type: UPDATE_SERVICE,
        payload: {
            services: newService
        },
    }
};

export function deleteService(service) {
    return {
        type: DELETE_SERVICE,
        payload: {
            services: service
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            services: 'ERROR!!',
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
