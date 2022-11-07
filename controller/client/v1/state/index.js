const stateDb = require('../../../../data-access/stateDb');
const cityDb = require('../../../../data-access/cityDb');
const pincodeDb = require('../../../../data-access/pincodeDb');

const stateSchema = require('../../../../validation/schema/state');

const createValidation = require('../../../../validation')(stateSchema.createSchema);
const updateValidation = require('../../../../validation')(stateSchema.updateSchema);
const filterValidation = require('../../../../validation')(stateSchema.filterValidationSchema);
const addStateUsecase = require('../../../../use-case/state/addState')({
  stateDb,
  createValidation 
});
const findAllStateUsecase = require('../../../../use-case/state/findAllState')({
  stateDb,
  filterValidation
});
const getStateCountUsecase = require('../../../../use-case/state/getStateCount')({
  stateDb,
  filterValidation
});
const softDeleteManyStateUsecase = require('../../../../use-case/state/softDeleteManyState')({
  stateDb,
  cityDb,
  pincodeDb
});
const bulkInsertStateUsecase = require('../../../../use-case/state/bulkInsertState')({ stateDb });
const bulkUpdateStateUsecase = require('../../../../use-case/state/bulkUpdateState')({ stateDb });
const deleteManyStateUsecase = require('../../../../use-case/state/deleteManyState')({
  stateDb,
  cityDb,
  pincodeDb
});
const softDeleteStateUsecase = require('../../../../use-case/state/softDeleteState')({
  stateDb,
  cityDb,
  pincodeDb
});
const partialUpdateStateUsecase = require('../../../../use-case/state/partialUpdateState')({ stateDb });
const updateStateUsecase = require('../../../../use-case/state/updateState')({
  stateDb,
  updateValidation 
});
const getStateUsecase = require('../../../../use-case/state/getState')({
  stateDb,
  filterValidation
});
const deleteStateUsecase = require('../../../../use-case/state/deleteState')({
  stateDb,
  cityDb,
  pincodeDb
});

const stateController = require('./state');

const addState = stateController.addState(addStateUsecase);
const findAllState = stateController.findAllState(findAllStateUsecase);
const getStateCount = stateController.getStateCount(getStateCountUsecase);
const softDeleteManyState = stateController.softDeleteManyState(softDeleteManyStateUsecase);
const bulkInsertState = stateController.bulkInsertState(bulkInsertStateUsecase);
const bulkUpdateState = stateController.bulkUpdateState(bulkUpdateStateUsecase);
const deleteManyState = stateController.deleteManyState(deleteManyStateUsecase);
const softDeleteState = stateController.softDeleteState(softDeleteStateUsecase);
const partialUpdateState = stateController.partialUpdateState(partialUpdateStateUsecase);
const updateState = stateController.updateState(updateStateUsecase);
const getStateById = stateController.getState(getStateUsecase);
const deleteState = stateController.deleteState(deleteStateUsecase);

module.exports = {
  addState,
  findAllState,
  getStateCount,
  softDeleteManyState,
  bulkInsertState,
  bulkUpdateState,
  deleteManyState,
  softDeleteState,
  partialUpdateState,
  updateState,
  getStateById,
  deleteState,
};