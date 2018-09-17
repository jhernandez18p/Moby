import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// import { createLogger } from 'redux-logger';

import {
    answerReducer,                // Answers
    blogCommentReducer,           // blog_comments
    blogReducer,                  // blog_post
    blogTagsReducer,              // blog_post
    brandReducer,                 // brands
    carrouselReducer,             // carrousel
    categoryReducer,              // categories
    colorReducer,                 // Colors
    departmentReducer,            // departments
    flatpageReducer,              // Flatpage
    imgCarrouselReducer,          // img_carrousel
    lineReducer,                  // lines
    pagePositionReducer,          // page_position
    pagesReducer,                 // pages
    productReducer,               // products
    providerReducer,              // providers
    questionReducer,              // Questions
    serviceReducer,               // services
    siteReducer,                  // site
    socialMediaReducer,           // Social Media
    subLineReducer,               // sub_lines
    testimonialReducer,           // testimonials
    typeReducer,                  // types
    userReducer,                  // user
    usersReducer,                 // users
} from './reducers'

const allReducers = combineReducers(
    {
        answers: answerReducer,                     // Answers
        blog_comments: blogCommentReducer,          // blog_comments
        blog_post: blogReducer,                     // blog_post
        blog_tags: blogTagsReducer,                 // blog_tags
        brands: brandReducer,                       // brands
        carrousel: carrouselReducer,                // carrousel
        categories: categoryReducer,                // categories
        colors: colorReducer,                       // Colors
        departments: departmentReducer,             // departments
        flatpages: flatpageReducer,                 // flatpages
        img_carrousel: imgCarrouselReducer,         // img_carrousel
        lines: lineReducer,                         // lines
        page_position: pagePositionReducer,         // page_position
        pages: pagesReducer,                        // pages
        products: productReducer,                   // products
        providers: providerReducer,                 // providers
        questions: questionReducer,                 // question
        services: serviceReducer,                   // services
        site: siteReducer,                          // site
        social_media: socialMediaReducer,           // Social Media
        sub_lines: subLineReducer,                  // sub_lines
        testimonials: testimonialReducer,           // testimonials
        types: typeReducer,                         // types
        user: userReducer,                          // user
        users: usersReducer,                        // users
    }
);
    
// const loggerMiddleware = createLogger();
const composeEnhancers =  compose(
    applyMiddleware(
        thunk,
        // loggerMiddleware
    ),
    // window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers,
    composeEnhancers
);

export default store;