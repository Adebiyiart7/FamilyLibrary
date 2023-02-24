const { addBookSchema } = require("../../config/validation");
const Book = require("../../models/book");
const { apiResponse } = require("../../utils");
const Tag = require("../../models/base/tag");
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
      tags,
      fullText
    } = req.body;

  // check if book already exist
  if (await Book.findOne({ title: title })) {
    res.status(400);
    throw new Error("A book with this title already exist!")
  }

  // check in all supplied tags exist
  const tagsArray = tags.split(",");
  for (let tag of tagsArray) {
    tag = tag.trim();
    
    if (!await Tag.findOne({ name: tag })) {
      res.status(400);
      throw new Error(`This tag (${tag}), does not exist!`)
    }
  }

    const book = await Book.create({
      title: title,
      author: author,
      image: image,
      screenCount: 0,
      readersCount: 0,
      averageRating: 0,
      ratingsCount: 0,
      summary: summary,
      tags: tags,
      fullText: fullText
    });

    return res.status(201).json(
      apiResponse(res.statusCode, "Book added successfully", {
        _id: book._id,
        author: book.author,
        title: book.title,
        image: book.image,
        summary: book.summary,
        tags: book.tags,
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
