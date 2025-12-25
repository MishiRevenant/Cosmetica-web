const { services, gallery } = require('../models/data');

const siteController = {
    index: (req, res) => {
        res.render('index', {
            title: 'Inicio',
            page: 'home'
        });
    },
    services: (req, res) => {
        res.render('services', {
            title: 'Servicios Exclusivos',
            page: 'services',
            services
        });
    },
    gallery: (req, res) => {
        res.render('gallery', {
            title: 'Nuestra Colección',
            page: 'gallery',
            gallery
        });
    },
    contact: (req, res) => {
        res.render('contact', {
            title: 'Contáctanos',
            page: 'contact'
        });
    }
};

module.exports = siteController;
