const Joi = require('joi');

const schema = Joi.object({
  body: Joi.string().required()
});

exports.handler = (event) => {
  const { error } = schema.validate(event);
  if (error) {
    return false;
  }
  return true;
};
