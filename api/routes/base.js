
const router = require("express").Router();

// LOCAL IMPORTS
const add = require("../controllers/base/tag/add");
const get20Tags = require("../controllers/base/tag/get20Tags");
const auth = require("../middleware/auth");

router.post("/tags/add",auth, add);
router.get("/tags/get20Tags",auth, get20Tags);

module.exports = router;