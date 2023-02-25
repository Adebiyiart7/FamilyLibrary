const User = require("../../models/user");
const Book = require("../../models/book")
const { apiResponse } = require("../../utils");

/**
 * @route      PUT /api/bookmarks/all
 * @desc       get all bookmarks
 * @access     private
 */

const getAll = async (req, res) => {
  const user = await User.findById(req.user._id);
  const bookmarks = user.bookmarks

  // fetch books
  const books = await Book.find({_id: {$in: bookmarks}})
  return res.status(200).json(apiResponse(res.statusCode, "Successful", books));
}

module.exports = getAll;