const Tag = require("../../../models/base/tag");
const { apiResponse } = require("../../../utils");

/**
 * @route       POST /api/base/tag/get20Tags
 * @desc        get 20 tag; paginated in 20s
 * @access      public
 */
const get20Tags = async (req, res) => {
  const tags = await Tag.find().select(["name", "numberOfBooks"]).sort({
    numberOfBooks: -1,
  });
  return res
    .status(201)
    .json(apiResponse(res.statusCode, "Request successful", tags));
};

module.exports = get20Tags;
