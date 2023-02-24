const Book = require("../../models/book");
const { apiResponse } = require("../../utils");

/**
 * @route       POST /api/books/all
 * @desc        get all books
 * @access      public
 */
const getAll = async (req, res) => {
  const search = req.query.search;
  let query = {};

  if (search) {
    query = {
      $or: [
        {
          title: { $regex: search, $options: "i" }
        },
        {
          author: { $regex: search, $options: "i" }
        }
      ]
    };
  }

  try {
    const books = await Book.find(query).select("-__v");
    console.log(books.length);
    return res.status(201).json(apiResponse(res.statusCode, "", books));
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error Fetching Books!");
  }
};

module.exports = getAll;
