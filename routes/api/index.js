const router = require('express').Router();
const s3Routes = require('./s3-multer');

router.use('/s3-routes', s3Routes);

module.exports = router;