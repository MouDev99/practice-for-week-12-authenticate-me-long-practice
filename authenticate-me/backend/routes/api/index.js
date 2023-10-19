const router = require('express').Router();
const { restoreUser, setTokenCookie, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});


module.exports = router;
