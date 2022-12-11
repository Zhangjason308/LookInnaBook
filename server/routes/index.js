const router = require("express").Router();
const setupApi = pool => {
    const attachDb = api => require(api)(pool)

    router.use("/books",attachDb('./book_route'));
    router.use('/register', attachDb('./register_route'));
    router.use('/login', attachDb('./login_route'));
    router.use('/cart', attachDb('./cart_route'));
    //router.use('/inventory', attachDb('./inventory'));
    //router.use('/publishers', attachDb('./publishers'));
    //router.use('/orders', attachDb('./orders'));
    //router.use('/sales-reports', attachDb('./sales-reports'));
    //router.use('/registration', attachDb('./registration'));
    //router.use('/profile', attachDb('./profile'));
    //router.use('/reset-password', attachDb('./reset-password'));
    //router.use('/payment', attachDb('./payment'));
    //router.use('/modify-inventory', attachDb('./modify-inventory'));
    //router.use('/modify-publisher', attachDb('./modify-publisher'));
    
    return router;
}

module.exports = setupApi;

