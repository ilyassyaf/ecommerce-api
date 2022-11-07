const orderDb = require('../../../data-access/orderDb');

const orderSchema = require('../../../validation/schema/order');

const createValidation = require('../../../validation')(orderSchema.createSchema);
const updateValidation = require('../../../validation')(orderSchema.updateSchema);
const filterValidation = require('../../../validation')(orderSchema.filterValidationSchema);
const addOrderUsecase = require('../../../use-case/order/addOrder')({
  orderDb,
  createValidation 
});
const findAllOrderUsecase = require('../../../use-case/order/findAllOrder')({
  orderDb,
  filterValidation
});
const getOrderCountUsecase = require('../../../use-case/order/getOrderCount')({
  orderDb,
  filterValidation
});
const softDeleteManyOrderUsecase = require('../../../use-case/order/softDeleteManyOrder')({ orderDb });
const bulkInsertOrderUsecase = require('../../../use-case/order/bulkInsertOrder')({ orderDb });
const bulkUpdateOrderUsecase = require('../../../use-case/order/bulkUpdateOrder')({ orderDb });
const deleteManyOrderUsecase = require('../../../use-case/order/deleteManyOrder')({ orderDb });
const softDeleteOrderUsecase = require('../../../use-case/order/softDeleteOrder')({ orderDb });
const partialUpdateOrderUsecase = require('../../../use-case/order/partialUpdateOrder')({ orderDb });
const updateOrderUsecase = require('../../../use-case/order/updateOrder')({
  orderDb,
  updateValidation 
});
const getOrderUsecase = require('../../../use-case/order/getOrder')({
  orderDb,
  filterValidation
});
const deleteOrderUsecase = require('../../../use-case/order/deleteOrder')({ orderDb });

const orderController = require('./order');

const addOrder = orderController.addOrder(addOrderUsecase);
const findAllOrder = orderController.findAllOrder(findAllOrderUsecase);
const getOrderCount = orderController.getOrderCount(getOrderCountUsecase);
const softDeleteManyOrder = orderController.softDeleteManyOrder(softDeleteManyOrderUsecase);
const bulkInsertOrder = orderController.bulkInsertOrder(bulkInsertOrderUsecase);
const bulkUpdateOrder = orderController.bulkUpdateOrder(bulkUpdateOrderUsecase);
const deleteManyOrder = orderController.deleteManyOrder(deleteManyOrderUsecase);
const softDeleteOrder = orderController.softDeleteOrder(softDeleteOrderUsecase);
const partialUpdateOrder = orderController.partialUpdateOrder(partialUpdateOrderUsecase);
const updateOrder = orderController.updateOrder(updateOrderUsecase);
const getOrderById = orderController.getOrder(getOrderUsecase);
const deleteOrder = orderController.deleteOrder(deleteOrderUsecase);

module.exports = {
  addOrder,
  findAllOrder,
  getOrderCount,
  softDeleteManyOrder,
  bulkInsertOrder,
  bulkUpdateOrder,
  deleteManyOrder,
  softDeleteOrder,
  partialUpdateOrder,
  updateOrder,
  getOrderById,
  deleteOrder,
};