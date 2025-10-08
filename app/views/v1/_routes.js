// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MAIN ADDITIONAL PENSION CALCULATOR JOURNEY
// ========================================================================


// Start page
router.post(/start/, (req, res) => {
    res.redirect('search')
});



module.exports = router;
