const router = require('express').Router();

const {
    getReports,
    getReportsById,
    createReports,
    deleteReports,
    updateReports,
} = require('../../controllers/reportsController.js');

// /api/reports
router.route('/').get(getReports).post(createReports);

// /api/reports/focus
router
    .route('/focus')
    .put(updateReports)
    .delete(deleteReports);

//  /api/reports/:reportsId
router.route('/:reportsId').get(getReportsById)

module.exports = router;