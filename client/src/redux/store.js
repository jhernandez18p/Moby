import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// import { createLogger } from 'redux-logger';

import {
    answerReducer,                // Answer
    answersReducer,               // Answers

    blogCommentReducer,           // blog_comments
    blogReducer,                  // blog_post
    postReducer,                  // blog_post
    blogTagReducer,               // tag
    blogTagsReducer,              // tags

    brandReducer,                 // brand
    brandsReducer,                // brands

    carrouselReducer,             // carrousel
    imgCarrouselReducer,          // img_carrousel

    categoryReducer,              // category
    categoriesReducer,            // categories

    colorReducer,                 // Colors

    departmentReducer,            // departments

    flatpageReducer,              // Flatpage
    flatpagesReducer,              // Flatpages
    
    lineReducer,                  // lines
    
    pagePositionReducer,          // page_position
    pagesReducer,                 // pages
    productReducer,               // products
    productsReducer,              // products
    providerReducer,              // providers
    questionReducer,              // Question
    questionsReducer,             // Questions
    serviceReducer,               // services
    imgServiceReducer,            // services
    servicesReducer,              // services
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
        answer: answerReducer,                      // Answer
        answers: answersReducer,                    // Answers
        blog_comments: blogCommentReducer,          // blog_comments
        blog_post: postReducer,                     // blog_post
        blog_posts: blogReducer,                    // blog_post
        blog_tag: blogTagReducer,                   // blog_tag
        blog_tags: blogTagsReducer,                 // blog_tags
        brand: brandReducer,                        // brands
        brands: brandsReducer,                      // brands
        carrousel: carrouselReducer,                // carrousel
        category: categoryReducer,                  // category
        categories: categoriesReducer,              // categories
        colors: colorReducer,                       // Colors
        department: departmentReducer,              // department
        departments: departmentReducer,             // departments
        flatpage: flatpageReducer,                  // flatpage
        flatpages: flatpagesReducer,                // flatpages
        img_carrousel: imgCarrouselReducer,         // img_carrousel
        line: lineReducer,                          // lines
        lines: lineReducer,                         // lines
        page_position: pagePositionReducer,         // page_position
        pages: pagesReducer,                        // pages
        product: productReducer,                    // product
        products: productsReducer,                  // products
        providers: providerReducer,                 // providers
        question: questionReducer,                  // question
        questions: questionsReducer,                // questions
        service: serviceReducer,                    // service
        service_image: imgServiceReducer,           // images service
        services: servicesReducer,                  // services
        site: siteReducer,                          // site
        social_media: socialMediaReducer,           // Social Media
        sub_line: subLineReducer,                   // sub_lines
        sub_lines: subLineReducer,                  // sub_lines
        testimonial: testimonialReducer,            // testimonial
        testimonials: testimonialReducer,           // testimonials
        type: typeReducer,                          // types
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