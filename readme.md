# Restaurant Webserver
This package contains APIs for a restaurant manager, that allows both owners and customers to manage orders.


## Version: 1.1.2
Thanks to the optimization of the custom package, now the App is lightweight and needs no function to run at the start.

## APIs for the Admin
In order to use these APIs you must be logged as admin.

### GET /orders(s)
It recalls the complete order list.

`router.get('/orders', auth,  function(req, res) {
    res.json(restaurantManager.showOrders());
})`


### PUT /orders/ready/:id
Sets the status of an order as ready.
`router.put('/orders/ready/:id', auth,  function(req, res) {
     restaurantManager.setOrderReady(parseInt(req.params.id));
     res.json({message: 'Order has been set as ready'});
 })`

### PUT /orders/closed/:id
Sets the status of an order as closed.
 `router.put('/orders/closed/:id', auth,  function(req, res) {
      restaurantManager.setOrderClosed(parseInt(req.params.id));
      res.json({message: 'Order has been set as closed'});
  })`

### DELETE /orders:id
Deletes an order
 `router.delete('/orders/:id', auth,  function(req, res) {
     restaurantManager.deleteOrder(parseInt(req.params.id));
     res.json({message: 'Order has been deleted'});
 })`

### GET /orders/:status
Filters the orders according to their status.
`router.get('/orders/:status', auth, function(req, res) {
     res.json(restaurantManager.filter(req.params.status));
})`

### GET /profit
Returns the total income generated by the orders.
`router.get('/profit', auth,  function(req, res) {
     res.json(restaurantManager.showProfit());
 })`

### GET /users/:token
 `router.get('/users/:token', auth,  function(req, res) {
     res.json(restaurantManager.showByUser(req.params.token));
 })`

## APIs for users
You must be a registered user in order to use these apis.

### POST /orders
Places an order through a body.
`router.post('/orders', authUser, function(req, res) {
    restaurantManager.addOrder(req.body);
    res.json({message: 'Your order has been placed'});
})`

### GET /orders
Returns the orders placed by the given user.
`router.get('/orders', authUser,  function(req, res) {
    res.json(restaurantManager.showByUser(req.query.token));
})`
