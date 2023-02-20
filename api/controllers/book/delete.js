const Book = require("../../models/book");
const { apiResponse } = require("../../utils");

/**
 * @route       POST /api/books/delete
 * @desc        delete one book
 * @access      private
 */
const deleteOne = async (req, res) => {
  try {
    await Book.deleteOne(req.params._id).select("-__v");

    return res.status(201).json(apiResponse(res.statusCode, "", "Deleted"));
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error Deleting Book!");
  }
};

module.exports = deleteOne;
