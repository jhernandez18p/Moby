import axios from 'axios';

const fetch = (url, {...params}) => {
    axios.get(url)
        .then(function (response) {
            // handle success // console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            // handle error  // console.log(error);
            return error;
        })
        .then(function () {
            // always executed // console.log('Api Get Request: ', url)
        });
}

const brands = fetch("localhost:10500/api/v2/brands/");
const carouselImages = fetch("localhost:10500/api/v2/carousel-images/");
const carousels = fetch("localhost:10500/api/v2/carousels/");
const categories = fetch("localhost:10500/api/v2/categories/");
const colors = fetch("localhost:10500/api/v2/colors/");
const comments = fetch("localhost:10500/api/v2/comments/");
const departments = fetch("localhost:10500/api/v2/departments/");
const lines = fetch("localhost:10500/api/v2/lines/");
const pagePositions = fetch("localhost:10500/api/v2/page-positions/");
const pages = fetch("localhost:10500/api/v2/pages/");
const posts = fetch("localhost:10500/api/v2/posts/");
const products = fetch("localhost:10500/api/v2/products/");
const providers = fetch("localhost:10500/api/v2/providers/");
const services = fetch("localhost:10500/api/v2/services/");
const site = fetch("localhost:10500/api/v2/site/");
const socialMedia = fetch("localhost:10500/api/v2/social-media/");
const subLines = fetch("localhost:10500/api/v2/sub-lines/");
const types = fetch("localhost:10500/api/v2/types/");
const testimonials = fetch("localhost:10500/api/v2/testimonials/");


const data = {
    blog_comments: comments,
    blog_post: posts,
    brands: brands,
    carrousel: carousels,
    colors: colors,
    categories: categories,
    departments: departments,
    img_carrousel: carouselImages,
    lines: lines,
    page_position: pagePositions,
    pages: pages,
    products: products,
    providers: providers,
    services: services,
    site: site,
    social_media: socialMedia,
    sub_lines: subLines,
    testimonials: testimonials,
    types: types,
    users: users,
    user: {
        id: 0,
        token: null,
        last_login: null,
        is_superuser: false,
        username: "Guest",
        first_name: "",
        last_name: "",
        email: null,
        is_staff: false,
        is_active: false,
        date_joined: null
    },
}

export default data;