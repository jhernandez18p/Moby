import axios from 'axios';

export const ADD_PRODUCT = 'products:addProduct';
export const UPDATE_PRODUCT = 'products:updateProduct';
export const DELETE_PRODUCT = 'products:deleteProduct';
export const REQUEST_PRODUCT = 'products:requestProduct';
export const FETCH_PRODUCTS = 'products:fetchProducts';
export const SHOW_ERROR = 'products:showError';

const instance = axios.create({
    baseURL: 'localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            code: null,
            model: null,
            name: null,
            origin: null,
            sales_unit: null,
            ref: null,
            description: null,
            slug: null,
            stock: null,
            views: null,
            picture: null,
            price_1: null,
            price_2: null,
            price_3: null,
            price_4: null,
            price_5: null,
            updated: null,
            created_at: null,
            img: null,
            active: null,
            featured: null,
            imported: null,
            is_shipping_required: null,
            item_type: null,
            line: null,
            category: null,
            color: null,
            department: null,
            brand: null,
            provider: null,
            sub_line: null,
        },
    ]
}

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
            products: initialState,
            error: [error]
        }
    }
};

export const fetchProducts = () => {

    return dispatch => {
        instance.get(`products/`)
            .then(res => {
                let products = res.data;
                return dispatch({
                    type: FETCH_PRODUCTS,
                    payload: {
                        products
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}