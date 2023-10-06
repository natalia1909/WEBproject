/**
 * File: routes.js
 * Name: Angie Sabogal
 * StudentID: 301269651
 * Date: 3/10/2023
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home');
    next();
});

router.get('/about', (req, res, next) => {
    res.render('about');
    next();
});

router.get('/projects', (req, res, next) => {
    res.render('projects');
    next();
});

router.get('/services', (req, res, next) => {
    res.render('services');
    next();
});

router.get('/contact', (req, res, next) => {
    res.render('contact');
    next();
});

router.post('/submit-contact', (req, res) => {
    res.send('<script>alert("Thank you for contacting us."); window.location="/";</script>');
});

module.exports = router;
