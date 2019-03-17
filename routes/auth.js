const express           = require('express')
    , router            = express.Router()
    , passportGoogle    = require('../auth/google');

router.get('/google', passportGoogle.authenticate(
    'google',
    {
        scope: ['profile'] //information to be requested from google
    }
));

router.get('/google/callback', passportGoogle.authenticate(
    'google',
    {
        failureRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/chat');
    }
);

module.exports = router;