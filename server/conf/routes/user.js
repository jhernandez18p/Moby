const express = require('express');

const usercontroller = require('./../controllers/user');

module.exports = (router) => {
    /** User Login [GET] **/
    router
        .route('/login')
        .get(usercontroller.signIn)
    /** User Login [POST] **/
}