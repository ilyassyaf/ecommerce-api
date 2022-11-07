const walletTransactionDb = require('../../../data-access/walletTransactionDb');

const walletTransactionSchema = require('../../../validation/schema/walletTransaction');

const createValidation = require('../../../validation')(walletTransactionSchema.createSchema);
const updateValidation = require('../../../validation')(walletTransactionSchema.updateSchema);
const filterValidation = require('../../../validation')(walletTransactionSchema.filterValidationSchema);
const addWalletTransactionUsecase = require('../../../use-case/walletTransaction/addWalletTransaction')({
  walletTransactionDb,
  createValidation 
});
const findAllWalletTransactionUsecase = require('../../../use-case/walletTransaction/findAllWalletTransaction')({
  walletTransactionDb,
  filterValidation
});
const getWalletTransactionCountUsecase = require('../../../use-case/walletTransaction/getWalletTransactionCount')({
  walletTransactionDb,
  filterValidation
});
const softDeleteManyWalletTransactionUsecase = require('../../../use-case/walletTransaction/softDeleteManyWalletTransaction')({ walletTransactionDb });
const bulkInsertWalletTransactionUsecase = require('../../../use-case/walletTransaction/bulkInsertWalletTransaction')({ walletTransactionDb });
const bulkUpdateWalletTransactionUsecase = require('../../../use-case/walletTransaction/bulkUpdateWalletTransaction')({ walletTransactionDb });
const deleteManyWalletTransactionUsecase = require('../../../use-case/walletTransaction/deleteManyWalletTransaction')({ walletTransactionDb });
const softDeleteWalletTransactionUsecase = require('../../../use-case/walletTransaction/softDeleteWalletTransaction')({ walletTransactionDb });
const partialUpdateWalletTransactionUsecase = require('../../../use-case/walletTransaction/partialUpdateWalletTransaction')({ walletTransactionDb });
const updateWalletTransactionUsecase = require('../../../use-case/walletTransaction/updateWalletTransaction')({
  walletTransactionDb,
  updateValidation 
});
const getWalletTransactionUsecase = require('../../../use-case/walletTransaction/getWalletTransaction')({
  walletTransactionDb,
  filterValidation
});
const deleteWalletTransactionUsecase = require('../../../use-case/walletTransaction/deleteWalletTransaction')({ walletTransactionDb });

const walletTransactionController = require('./walletTransaction');

const addWalletTransaction = walletTransactionController.addWalletTransaction(addWalletTransactionUsecase);
const findAllWalletTransaction = walletTransactionController.findAllWalletTransaction(findAllWalletTransactionUsecase);
const getWalletTransactionCount = walletTransactionController.getWalletTransactionCount(getWalletTransactionCountUsecase);
const softDeleteManyWalletTransaction = walletTransactionController.softDeleteManyWalletTransaction(softDeleteManyWalletTransactionUsecase);
const bulkInsertWalletTransaction = walletTransactionController.bulkInsertWalletTransaction(bulkInsertWalletTransactionUsecase);
const bulkUpdateWalletTransaction = walletTransactionController.bulkUpdateWalletTransaction(bulkUpdateWalletTransactionUsecase);
const deleteManyWalletTransaction = walletTransactionController.deleteManyWalletTransaction(deleteManyWalletTransactionUsecase);
const softDeleteWalletTransaction = walletTransactionController.softDeleteWalletTransaction(softDeleteWalletTransactionUsecase);
const partialUpdateWalletTransaction = walletTransactionController.partialUpdateWalletTransaction(partialUpdateWalletTransactionUsecase);
const updateWalletTransaction = walletTransactionController.updateWalletTransaction(updateWalletTransactionUsecase);
const getWalletTransactionById = walletTransactionController.getWalletTransaction(getWalletTransactionUsecase);
const deleteWalletTransaction = walletTransactionController.deleteWalletTransaction(deleteWalletTransactionUsecase);

module.exports = {
  addWalletTransaction,
  findAllWalletTransaction,
  getWalletTransactionCount,
  softDeleteManyWalletTransaction,
  bulkInsertWalletTransaction,
  bulkUpdateWalletTransaction,
  deleteManyWalletTransaction,
  softDeleteWalletTransaction,
  partialUpdateWalletTransaction,
  updateWalletTransaction,
  getWalletTransactionById,
  deleteWalletTransaction,
};