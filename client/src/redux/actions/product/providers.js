import axios from 'axios';

export const ADD_PROVIDER = 'providers:addProvider';
export const UPDATE_PROVIDER = 'providers:updateProvider';
export const DELETE_PROVIDER = 'providers:deleteProvider';
export const REQUEST_PROVIDER = 'providers:requestProvider';
export const FETCH_PROVIDERS = 'providers:fetchProviders';
export const SHOW_ERROR = 'providers:showError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState ={
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            logo: null,
            name: null,
            slug: null,
            website: null,
            code: null,
        },
    ]
}

export function addProvider(newProvider) {
    return {
        type: ADD_PROVIDER,
        payload: {
            providers: newProvider
        },
    }
};

export function updateProvider(newProvider) {
    return {
        type: UPDATE_PROVIDER,
        payload: {
            providers: newProvider
        },
    }
};

export function deleteProvider(Provider) {
    return {
        type: DELETE_PROVIDER,
        payload: {
            providers: Provider
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            providers: initialState,
            error: [error]
        }
    }
};

export const fetchProviders = () => {

    return dispatch => {
        instance.get(`providers/`)
            .then(res => {
                let Providers = res.data;
                // console.log(Providers);
                // dispatch(requestcarousels(Providers));
                return dispatch({
                    type: FETCH_PROVIDERS,
                    payload: {
                        Providers
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}