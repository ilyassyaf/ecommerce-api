const walletDb = require('../../../../data-access/walletDb');
const walletTransactionDb = require('../../../../data-access/walletTransactionDb');

const walletSchema = require('../../../../validation/schema/wallet');

const createValidation = require('../../../../validation')(walletSchema.createSchema);
const updateValidation = require('../../../../validation')(walletSchema.updateSchema);
const filterValidation = require('../../../../validation')(walletSchema.filterValidationSchema);
const addWalletUsecase = require('../../../../use-case/wallet/addWallet')({
  walletDb,
  createValidation 
});
const findAllWalletUsecase = require('../../../../use-case/wallet/findAllWallet')({
  walletDb,
  filterValidation
});
const getWalletCountUsecase = require('../../../../use-case/wallet/getWalletCount')({
  walletDb,
  filterValidation
});
const softDeleteManyWalletUsecase = require('../../../../use-case/wallet/softDeleteManyWallet')({
  walletDb,
  walletTransactionDb
});
const bulkInsertWalletUsecase = require('../../../../use-case/wallet/bulkInsertWallet')({ walletDb });
const bulkUpdateWalletUsecase = require('../../../../use-case/wallet/bulkUpdateWallet')({ walletDb });
const deleteManyWalletUsecase = require('../../../../use-case/wallet/deleteManyWallet')({
  walletDb,
  walletTransactionDb
});
const softDeleteWalletUsecase = require('../../../../use-case/wallet/softDeleteWallet')({
  walletDb,
  walletTransactionDb
});
const partialUpdateWalletUsecase = require('../../../../use-case/wallet/partialUpdateWallet')({ walletDb });
const updateWalletUsecase = require('../../../../use-case/wallet/updateWallet')({
  walletDb,
  updateValidation 
});
const getWalletUsecase = require('../../../../use-case/wallet/getWallet')({
  walletDb,
  filterValidation
});
const deleteWalletUsecase = require('../../../../use-case/wallet/deleteWallet')({
  walletDb,
  walletTransactionDb
});

const walletController = require('./wallet');

const addWallet = walletController.addWallet(addWalletUsecase);
const findAllWallet = walletController.findAllWallet(findAllWalletUsecase);
const getWalletCount = walletController.getWalletCount(getWalletCountUsecase);
const softDeleteManyWallet = walletController.softDeleteManyWallet(softDeleteManyWalletUsecase);
const bulkInsertWallet = walletController.bulkInsertWallet(bulkInsertWalletUsecase);
const bulkUpdateWallet = walletController.bulkUpdateWallet(bulkUpdateWalletUsecase);
const deleteManyWallet = walletController.deleteManyWallet(deleteManyWalletUsecase);
const softDeleteWallet = walletController.softDeleteWallet(softDeleteWalletUsecase);
const partialUpdateWallet = walletController.partialUpdateWallet(partialUpdateWalletUsecase);
const updateWallet = walletController.updateWallet(updateWalletUsecase);
const getWalletById = walletController.getWallet(getWalletUsecase);
const deleteWallet = walletController.deleteWallet(deleteWalletUsecase);

module.exports = {
  addWallet,
  findAllWallet,
  getWalletCount,
  softDeleteManyWallet,
  bulkInsertWallet,
  bulkUpdateWallet,
  deleteManyWallet,
  softDeleteWallet,
  partialUpdateWallet,
  updateWallet,
  getWalletById,
  deleteWallet,
};