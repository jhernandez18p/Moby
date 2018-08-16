const express = require('express');

const contactController = require('./../controllers/contact');

module.exports = (router) => {
    router
        .route('/contact/email')
        .post(contactController.contactEmail)
}