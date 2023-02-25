const User = require("../../models/user");
const Book = require("../../models/book");
const { apiResponse } = require("../../utils");

/**
 * @route      PUT /api/bookmarks/add
 * @desc       add a book to user's book bookmark
 * @access     private
 */

const add = async (req, res) => {
  const bookID = req.query._id;
  
  // check if book exists
  if (!(await Book.findById(bookID))) {
    res.status(404);
    throw new Error("Invalid book ID");
  }

  // get user
  const user = await User.findById(req.user._id);
  
  // check if book is not in the user's bookmarks
  if (user.bookmarks.includes(bookID)) {
    res.status(400);
    throw new Error("Book already in the bookmark list.");
  }

  user.bookmarks.push(bookID);
  await user.save();

  return res
    .status(200)
    .json(apiResponse(res.statusCode, "Bookmarked", user));
};

module.exports = add;
