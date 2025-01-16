const express = require('express');
const router = express.Router();

router.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.json({ greeting: `Hello ${name}!!` });
});

module.exports = router;
