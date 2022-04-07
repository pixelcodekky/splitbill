const friendRouter = require('express').Router();
const FriendController = require('../controllers/friendcontroller');

friendRouter.get('/', FriendController.getall);
friendRouter.post('/', FriendController.create);
friendRouter.put('/', FriendController.update);
friendRouter.delete('/:Id', FriendController.delete);

module.exports = friendRouter;