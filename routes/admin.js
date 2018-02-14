const express = require('express');
const router = express.Router();
const restaurantManager = require ('restaurant-manager-alesscuderi');

var auth = function(req, res, next) {
    if (req.query.token === 'admin') {
      return next();
    }
    return res.status(401).json({message: 'Invalid token'})
}

router.get('/orders', auth,  function(req, res) {
    res.json(restaurantManager.showOrders());
})


router.put('/orders/ready/:id', auth,  function(req, res) {
     restaurantManager.setOrderReady(parseInt(req.params.id));
     res.json({message: 'Order has been set as ready'});
 })

 router.put('/orders/closed/:id', auth,  function(req, res) {
      restaurantManager.setOrderClosed(parseInt(req.params.id));
      res.json({message: 'Order has been set as closed'});
  })

 router.delete('/orders/:id', auth,  function(req, res) {
     restaurantManager.deleteOrder(parseInt(req.params.id));
     res.json({message: 'Order has been deleted'});
 })

router.get('/orders/:status', auth, function(req, res) {
     res.json(restaurantManager.filter(req.params.status));
})

router.get('/profit', auth,  function(req, res) {
     res.json(restaurantManager.showProfit());
 })

 router.get('/users/:token', auth,  function(req, res) {
     res.json(restaurantManager.showByUser(req.params.token));
 })

module.exports = router;
