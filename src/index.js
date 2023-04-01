const axios = require('axios');
const Joi = require('joi');

const schema = Joi.object({
  body: Joi.string().required()
});

exports.handler = async (event) => {
  const { error } = schema.validate(event);
  if (error) {
    return false;
  }

  let result;
  try {
    result = await axios({
      method: 'get',
      url: 'https://sv8iltgrb7.execute-api.us-east-1.amazonaws.com/prod/user'
    });
  } catch (e) {
    console.error(e);
    return false;
  }

  return result;
};
