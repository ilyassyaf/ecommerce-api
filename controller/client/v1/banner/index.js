const bannerDb = require('../../../../data-access/bannerDb');

const bannerSchema = require('../../../../validation/schema/banner');

const createValidation = require('../../../../validation')(bannerSchema.createSchema);
const updateValidation = require('../../../../validation')(bannerSchema.updateSchema);
const filterValidation = require('../../../../validation')(bannerSchema.filterValidationSchema);
const addBannerUsecase = require('../../../../use-case/banner/addBanner')({
  bannerDb,
  createValidation 
});
const findAllBannerUsecase = require('../../../../use-case/banner/findAllBanner')({
  bannerDb,
  filterValidation
});
const getBannerCountUsecase = require('../../../../use-case/banner/getBannerCount')({
  bannerDb,
  filterValidation
});
const softDeleteManyBannerUsecase = require('../../../../use-case/banner/softDeleteManyBanner')({ bannerDb });
const bulkInsertBannerUsecase = require('../../../../use-case/banner/bulkInsertBanner')({ bannerDb });
const bulkUpdateBannerUsecase = require('../../../../use-case/banner/bulkUpdateBanner')({ bannerDb });
const deleteManyBannerUsecase = require('../../../../use-case/banner/deleteManyBanner')({ bannerDb });
const softDeleteBannerUsecase = require('../../../../use-case/banner/softDeleteBanner')({ bannerDb });
const partialUpdateBannerUsecase = require('../../../../use-case/banner/partialUpdateBanner')({ bannerDb });
const updateBannerUsecase = require('../../../../use-case/banner/updateBanner')({
  bannerDb,
  updateValidation 
});
const getBannerUsecase = require('../../../../use-case/banner/getBanner')({
  bannerDb,
  filterValidation
});
const deleteBannerUsecase = require('../../../../use-case/banner/deleteBanner')({ bannerDb });

const bannerController = require('./banner');

const addBanner = bannerController.addBanner(addBannerUsecase);
const findAllBanner = bannerController.findAllBanner(findAllBannerUsecase);
const getBannerCount = bannerController.getBannerCount(getBannerCountUsecase);
const softDeleteManyBanner = bannerController.softDeleteManyBanner(softDeleteManyBannerUsecase);
const bulkInsertBanner = bannerController.bulkInsertBanner(bulkInsertBannerUsecase);
const bulkUpdateBanner = bannerController.bulkUpdateBanner(bulkUpdateBannerUsecase);
const deleteManyBanner = bannerController.deleteManyBanner(deleteManyBannerUsecase);
const softDeleteBanner = bannerController.softDeleteBanner(softDeleteBannerUsecase);
const partialUpdateBanner = bannerController.partialUpdateBanner(partialUpdateBannerUsecase);
const updateBanner = bannerController.updateBanner(updateBannerUsecase);
const getBannerById = bannerController.getBanner(getBannerUsecase);
const deleteBanner = bannerController.deleteBanner(deleteBannerUsecase);

module.exports = {
  addBanner,
  findAllBanner,
  getBannerCount,
  softDeleteManyBanner,
  bulkInsertBanner,
  bulkUpdateBanner,
  deleteManyBanner,
  softDeleteBanner,
  partialUpdateBanner,
  updateBanner,
  getBannerById,
  deleteBanner,
};