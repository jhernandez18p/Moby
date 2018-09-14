import axios from 'axios';

export const DELETE_SITE = 'site:deleteSite';
export const REQUEST_SITE = 'site:requestSite';
export const SHOW_ERROR = 'site:showError';
export const UPDATE_SITE = 'site:updateSite';
export const FETCH_SITE = 'site:fetchSite';


const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


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
            site: 'ERROR!!',
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
                // console.log(site);
                // dispatch(requestSite(site));
                return dispatch({
                    type: FETCH_SITE,
                    payload: {
                        site
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}