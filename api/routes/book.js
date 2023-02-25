const router = require("express").Router();

// LOCAL IMPORTS
const add = require("../controllers/book/add");
const deleteOne = require("../controllers/book/delete");
const getAll = require("../controllers/book/getAll");
const auth = require("../middleware/auth");

router.post("/add",auth, add);
router.get("/all",auth, getAll);
router.delete("/delete",auth, deleteOne);

module.exports = router;