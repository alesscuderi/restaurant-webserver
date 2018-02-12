const express = require('express');
const router = express.Router();
const restaurantManager = require ('restaurant-manager-alesscuderi')
var validTokens = ['Pippo','Caio','Sempronio'];

var authUser = function(req, res, next) {
    if (validTokens.includes(req.query.token)){
        return next();
    }
    res.status(401).json({message:'Invalid token'});
}

router.post('/orders', authUser, function(req, res) {
    restaurantManager.addOrder(req.body);
    res.json({message: 'Your order has been placed'});
})

router.get('/orders', authUser,  function(req, res) {
    res.json(restaurantManager.showByUser(req.query.token));
})

module.exports = router;
