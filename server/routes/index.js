const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({data:'this is index.'}));
router.get('/s', (req, res) => res.json({data:'this is indexs.'}));

module.exports = router