const pincodeDb = require('../../../../data-access/pincodeDb');

const pincodeSchema = require('../../../../validation/schema/pincode');

const createValidation = require('../../../../validation')(pincodeSchema.createSchema);
const updateValidation = require('../../../../validation')(pincodeSchema.updateSchema);
const filterValidation = require('../../../../validation')(pincodeSchema.filterValidationSchema);
const addPincodeUsecase = require('../../../../use-case/pincode/addPincode')({
  pincodeDb,
  createValidation 
});
const findAllPincodeUsecase = require('../../../../use-case/pincode/findAllPincode')({
  pincodeDb,
  filterValidation
});
const getPincodeCountUsecase = require('../../../../use-case/pincode/getPincodeCount')({
  pincodeDb,
  filterValidation
});
const softDeleteManyPincodeUsecase = require('../../../../use-case/pincode/softDeleteManyPincode')({ pincodeDb });
const bulkInsertPincodeUsecase = require('../../../../use-case/pincode/bulkInsertPincode')({ pincodeDb });
const bulkUpdatePincodeUsecase = require('../../../../use-case/pincode/bulkUpdatePincode')({ pincodeDb });
const deleteManyPincodeUsecase = require('../../../../use-case/pincode/deleteManyPincode')({ pincodeDb });
const softDeletePincodeUsecase = require('../../../../use-case/pincode/softDeletePincode')({ pincodeDb });
const partialUpdatePincodeUsecase = require('../../../../use-case/pincode/partialUpdatePincode')({ pincodeDb });
const updatePincodeUsecase = require('../../../../use-case/pincode/updatePincode')({
  pincodeDb,
  updateValidation 
});
const getPincodeUsecase = require('../../../../use-case/pincode/getPincode')({
  pincodeDb,
  filterValidation
});
const deletePincodeUsecase = require('../../../../use-case/pincode/deletePincode')({ pincodeDb });

const pincodeController = require('./pincode');

const addPincode = pincodeController.addPincode(addPincodeUsecase);
const findAllPincode = pincodeController.findAllPincode(findAllPincodeUsecase);
const getPincodeCount = pincodeController.getPincodeCount(getPincodeCountUsecase);
const softDeleteManyPincode = pincodeController.softDeleteManyPincode(softDeleteManyPincodeUsecase);
const bulkInsertPincode = pincodeController.bulkInsertPincode(bulkInsertPincodeUsecase);
const bulkUpdatePincode = pincodeController.bulkUpdatePincode(bulkUpdatePincodeUsecase);
const deleteManyPincode = pincodeController.deleteManyPincode(deleteManyPincodeUsecase);
const softDeletePincode = pincodeController.softDeletePincode(softDeletePincodeUsecase);
const partialUpdatePincode = pincodeController.partialUpdatePincode(partialUpdatePincodeUsecase);
const updatePincode = pincodeController.updatePincode(updatePincodeUsecase);
const getPincodeById = pincodeController.getPincode(getPincodeUsecase);
const deletePincode = pincodeController.deletePincode(deletePincodeUsecase);

module.exports = {
  addPincode,
  findAllPincode,
  getPincodeCount,
  softDeleteManyPincode,
  bulkInsertPincode,
  bulkUpdatePincode,
  deleteManyPincode,
  softDeletePincode,
  partialUpdatePincode,
  updatePincode,
  getPincodeById,
  deletePincode,
};