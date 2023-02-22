const { addBookSchema } = require("../../config/validation");
const Book = require("../../models/book");
const { apiResponse } = require("../../utils");

/**
 * @route       POST /api/books/add
 * @desc        add new book
 * @access      private
 */
const add = async (req, res) => {
  // try {
    const schema = addBookSchema;
    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400);
      throw new Error(error.message);
    }

    const {
      title,
      author,
      image,
      summary,
      genre,
      fullText
    } = req.body;

    const book = await Book.create({
      title: title,
      author: author,
      image: image,
      screenCount: 0,
      readersCount: 0,
      averageRating: 0,
      ratingsCount: 0,
      summary: summary,
      genre: genre,
      fullText: fullText
    });

    return res.status(201).json(
      apiResponse(res.statusCode, "", {
        _id: book._id,
        author: book.author,
        title: book.title,
        image: book.image,
        summary: book.summary,
        genre: book.genre,
        fullText: book.fullText,
        screenCount: book.screenCount,
        readersCount: book.readersCount,
        averageRating: book.averageRating,
        ratingsCount: book.ratingsCount,
      })
    );
  // } catch (error) {
  //   console.log(error);
  //   res.status(400);
  //   throw new Error("Error Add Book!");
  // }
};

module.exports = add;
