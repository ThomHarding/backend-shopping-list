const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorizeItem = require('../middleware/authorizeItem');
const Item = require('../models/Item');

module.exports = Router()

// TO DO - implement items CRUD

  .post('/', authenticate, async (req, res, next) => {
    try {
      const item = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(item);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', authenticate, authorizeItem, async (req, res, next) => {
    try {
      console.log(req.body);
      const item = await Item.updateById(req.params.id, req.body);
      res.json(item);
    } catch (e) {
      next(e);
    }
  });
