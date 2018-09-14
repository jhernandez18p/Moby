import axios from 'axios';

export const ADD_PRODUCT = 'products:addProduct';
export const UPDATE_PRODUCT = 'products:updateProduct';
export const DELETE_PRODUCT = 'products:deleteProduct';
export const REQUEST_PRODUCT = 'products:requestProduct';
export const FETCH_PRODUCTS = 'products:fetchProducts';
export const SHOW_ERROR = 'products:showError';

const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


export function addProduct(newProduct) {
    return {
        type: ADD_PRODUCT,
        payload: {
            products: newProduct
        },
    }
};

export function updateProduct(newProduct) {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            products: newProduct
        },
    }
};

export function deleteProduct(Product) {
    return {
        type: DELETE_PRODUCT,
        payload: {
            products: Product
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            products: 'ERROR!!',
            error: [error]
        }
    }
};

export const fetchProducts = () => {

    return dispatch => {
        instance.get(`products/`)
            .then(res => {
                let products = res.data;
                // console.log(products);
                // dispatch(requestcarousels(products));
                return dispatch({
                    type: FETCH_PRODUCTS,
                    payload: {
                        products
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}