import axios from 'axios';

export const ADD_SERVICE = 'service:addService';
export const UPDATE_SERVICE = 'service:updateService';
export const DELETE_SERVICE = 'service:deleteService';
export const REQUEST_SERVICE = 'service:requestService';
export const SHOW_ERROR = 'service:showError';

// Images 
export const ADD_IMG_SERVICE = 'service_image:addImgService';
export const UPDATE_IMG_SERVICE = 'service_image:updateImgService';
export const DELETE_IMG_SERVICE = 'service_image:deleteImgService';
export const REQUEST_IMG_SERVICE = 'service_image:requestImgService';
export const SHOW_IMG_ERROR = 'service_image:showImgError';

// Services 
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

export const requestService = (slug) => {

     return dispatch => {
        instance.get(`services/${slug}/`)
            .then(res => {
                let service = res.data;
                return dispatch({
                    type: REQUEST_SERVICE,
                    payload: {
                        service: service
                    }
                })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}

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
                return dispatch({
                    type: FETCH_SERVICES,
                    payload: {
                        services: services
                    }
                })
            })
            .catch(error => { dispatch(showServicesError( error )); })
    }
}


export const addImgService = (img) => {
    return {
        type: ADD_IMG_SERVICE,
        payload: {
            service_image: img
        },
    }
}
export const updateImgService = (img) => {
    return {
        type: UPDATE_IMG_SERVICE,
        payload: {
            service_image: img
        },
    }
}
export const deleteImgService = (img) => {
    return {
        type: DELETE_IMG_SERVICE,
        payload: {
            service_image: img
        },
    }
}
export const requestImgService = (serviceId) => {
    return dispatch => {
        instance.get(`photos/?Service=${serviceId}`)
            .then(res => {
                let service = res.data;
                
                return dispatch({
                    type: REQUEST_IMG_SERVICE,
                    payload: {
                        service_image: service
                    }
                })
            })
            // .catch(error => { dispatch(showImgError( error )); })
    }
}
export const showImgError = () => {

}