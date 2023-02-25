const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const add = require("../controllers/bookmark/add");
const getAll = require("../controllers/bookmark/getAll");
const auth = require("../middleware/auth");

router.put("/add", auth, add);
router.get("/all", auth, getAll);

module.exports = router;
