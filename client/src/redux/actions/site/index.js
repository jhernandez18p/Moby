import axios from 'axios';

export const DELETE_SITE = 'site:deleteSite';
export const REQUEST_SITE = 'site:requestSite';
export const SHOW_ERROR = 'site:showError';
export const UPDATE_SITE = 'site:updateSite';
export const FETCH_SITE = 'site:fetchSite';


const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialSite = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            name: null,
            title: null,
            short_description: null,
            description: null,
            url: null,
            phone: null,
            phone2: null,
            email: null,
            email2: null,
            schedule: null,
            workday: null,
            address: null,
            address1: null,
            logo: null,
            site_img: null,
            services_img: null,
            products_img: null,
            direction: null,
            direction_city: null,
            is_undercostruction: true,
        },
    ]
};

export function updateSite(newSite) {
    return {
        type: UPDATE_SITE,
        payload: {
            site: newSite
        },
    }
};

export function deleteSite(site) {
    return {
        type: DELETE_SITE,
        payload: {
            site: site
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            site: initialSite,
            error: [error]
        }
    }
};

export function requestSite(site) {
    return {
        type: REQUEST_SITE,
        payload:{
            site
        }
    }
};

export const fetchSite = () => {

    return dispatch => {
        instance.get(`site/`)
            .then(res => {
                let site = res.data;
                return dispatch({
                    type: FETCH_SITE,
                    payload: {
                        site
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}