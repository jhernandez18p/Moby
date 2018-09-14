import axios from 'axios';

export const ADD_BRAND = 'brands:addBrand';
export const DELETE_BRAND = 'brands:deleteBrand';
export const REQUEST_BRAND = 'brands:requestBrand';
export const SHOW_ERROR = 'brands:showError';
export const UPDATE_BRAND = 'brands:updateBrand';
export const FETCH_BRANDS = 'brands:fetchBrands';


const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


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
            brands: 'ERROR!!',
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
                // console.log(Brand);
                // dispatch(requestBrand(Brand));
                return dispatch({
                    type: FETCH_BRANDS,
                    payload: {
                        brands: Brand
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}