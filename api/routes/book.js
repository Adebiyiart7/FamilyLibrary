const router = require("express").Router();

// LOCAL IMPORTS
const add = require("../controllers/book/add");
const deleteOne = require("../controllers/book/delete");
const getAll = require("../controllers/book/getAll");

router.post("/add", add);
router.get("/all", getAll);
router.delete("/delete", deleteOne);

module.exports = router;