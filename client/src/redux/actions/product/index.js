import axios from 'axios';

export const ADD_PRODUCT = 'product:addProduct';
export const REQUEST_PRODUCT = 'product:fetchSingleProduct';
export const UPDATE_PRODUCT = 'product:updateProduct';
export const DELETE_PRODUCT = 'product:deleteProduct';
export const FETCH_PRODUCTS = 'products:fetchProducts';
export const SHOW_ERROR = 'products:showError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

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

const singleProduct = {
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
}

export function addProduct(newProduct) {
    return {
        type: ADD_PRODUCT,
        payload: {
            product: singleProduct,
            products: newProduct
        },
    }
};

export function updateProduct(newProduct) {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            product: newProduct
        },
    }
};

export function deleteProduct(Product) {
    return {
        type: DELETE_PRODUCT,
        payload: {
            product: singleProduct,
            products: Product
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            product: singleProduct,
            products: initialState,
            error: [error]
        }
    }
};

export const fetchSingleProduct = (slug) => {

    return dispatch => {
        instance.get(`products/${slug}/`)
            .then(res => {
                let product = res.data;
                return dispatch({
                    type: REQUEST_PRODUCT,
                    payload: {
                        product: product
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}

export const fetchProducts = ( params = '', offset = 1 ) => {

    let url = 'products/';
    let page = '';
    let hasParams = '';
    let _offset = offset;

    if (_offset > 1){
        _offset = (offset - 1) * 20;
        page = `&offset=${_offset}`;
    }else{
        page = ``;
    }
    if (params !== ''){
        // let newUrl = params.split('?');
        hasParams = params;
    }
    let _url = `${url}?${hasParams}${page}`;
    
    // console.log(_url);
    return dispatch => {
        instance.get(_url)
            .then(res => {
                let products = res.data;
                return dispatch({
                    type: FETCH_PRODUCTS,
                    payload: {
                        products: products
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}

export const fetchNextProducts = (limit = 20, offset=20) => {
    let url = `products/?limit=${limit}&offset=${offset}`;
    return dispatch => {
        instance.get(url)
        .then(res => {
                return dispatch({ type: FETCH_PRODUCTS, payload: { products: res.data } })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}

export const fetchPrevProducts = (limit = 20, offset=0) => {
    let url = `products/?limit=${limit}&offset=${offset}`;
    return dispatch => {
        instance.get(url)
            .then(res => {
                return dispatch({ type: FETCH_PRODUCTS, payload: { products: res.data } })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}