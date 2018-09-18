import axios from 'axios';

export const ADD_BRAND = 'brands:addBrand';
export const DELETE_BRAND = 'brands:deleteBrand';
export const REQUEST_BRAND = 'brands:requestBrand';
export const SHOW_ERROR = 'brands:showError';
export const UPDATE_BRAND = 'brands:updateBrand';
export const FETCH_BRANDS = 'brands:fetchBrands';

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
            logo: null,
            name: null,
            slug: null,
            website: null,
            code: null,
        },
    ]
}

export function addBrand(newBrand) {
    return {
        type: ADD_BRAND,
        payload: {
            brands: newBrand
        },
    }
};

export function updateBrand(newBrand) {
    return {
        type: UPDATE_BRAND,
        payload: {
            brands: newBrand
        },
    }
};

export function deleteBrand(Brand) {
    return {
        type: DELETE_BRAND,
        payload: {
            brands: Brand
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            brands: initialState,
            error: [error]
        }
    }
};

export function requestBrand(Brand) {
    return {
        type: REQUEST_BRAND,
        payload:{
            Brand
        }
    }
};

export const fetchBrands = () => {

    return dispatch => {
        instance.get(`brands/`)
            .then(res => {
                let Brand = res.data;
                return dispatch({
                    type: FETCH_BRANDS,
                    payload: {
                        brands: Brand
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}