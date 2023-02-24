const Tag = require("../../../models/base/tag");
const { apiResponse } = require("../../../utils");

/**
 *
 * @route    POST /api/base/tags/add
 * @desc      Create tag for books
 * @access    private
 *
 */
const add = async (req, res) => {
  const tagName = req.body.name;

  // Validate input
  if (!tagName) {
    res.status(400);
    throw new Error("Name field is required!");
  }

  // check if tag already exist
  let tag = await Tag.findOne({ name: tagName });
  console.log(tag);
  if (tag) {
    res.status(400);
    throw new Error("A tag with this name already exist.");
  }

  // if all the above pass, create a new tag
  tag = await Tag.create({ name: tagName });

  return res.status(201).json(
    apiResponse(res.statusCode, "Tag added successfully", {
      _id: tag._id,
      name: tag.name
    })
  );
};

module.exports = add;
