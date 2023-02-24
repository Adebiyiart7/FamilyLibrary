
const router = require("express").Router();

// LOCAL IMPORTS
const add = require("../controllers/base/tag/add");
const get20Tags = require("../controllers/base/tag/get20Tags");

router.post("/tags/add", add);
router.get("/tags/get20Tags", get20Tags);

module.exports = router;