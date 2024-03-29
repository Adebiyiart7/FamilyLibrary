require("joi");
const Joi = require("joi");

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const passwordError = `Password must be more than 8 chars, have at least one number, at least one special character(!@#$%^&*), at least one uppercase and one lowercase.`;

// LOGIN
const loginSchema = Joi.object()
  .keys({
    username: Joi.string().min(3).max(255).label("Username"),
    email: Joi.string().email().label("Email"),
    password: Joi.string().required().label("Password"),
  })
  .or("username", "email");

// REGISTER
const registerSchema = Joi.object({
  username: Joi.string().required().min(3).max(255).label("Username"),
  email: Joi.string().required().email().label("Email"),
  password: Joi.string()
    .required()
    .label("Password")
    .regex(passwordRegEx)
    .message(passwordError),
});

// PROFILE
const profileSchema = Joi.object({
  username: Joi.string().required().min(3).max(255).label("Username"),
  phoneNumber: Joi.string().required().min(3).max(20).label("Phone Number"),
  country: Joi.string().required().min(3).max(255).label("Country"),
  email: Joi.string().required().min(3).max(255).label("Email"),
  fullname: Joi.string().required().min(3).max(255).label("Full Name"),
  dob: Joi.string().required().label("DOB"),
  gender: Joi.string().required().min(3).max(20).label("Gender"),
});

const addBookSchema = Joi.object({
  author: Joi.string().required().min(3).max(255).label("Author"),
  title: Joi.string().required().min(3).max(255).label("Title"),
  image: Joi.string().required().label("Image"),
  screenCount: Joi.string().label("Screen Count"),
  readersCount: Joi.string().label("Readers Count"),
  averageRating: Joi.string().label("Average Rating"),
  ratingsCount: Joi.string().label("Ratings Count"),
  summary: Joi.string().required().label("Summary"),
  tags: Joi.string()
    // .regex(/(.*),$/, ": must end with a comma")
    .required()
    .min(3)
    .max(1000)
    .label("Tags"),
  fullText: Joi.string().required().label("Full Text")
});

module.exports = {
  registerSchema,
  loginSchema,
  profileSchema,
  addBookSchema
};
