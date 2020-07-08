module.exports = {
  tableName: "User",
  attributes: {
    id: { type: 'number', autoIncrement: true },
    username: { type: 'string', required: true },
    firstname: { type: 'string', required: true },
    lastname: { type: 'string', required: true },
    email: { type: 'string', required: true },
    image_url: { type: 'string', required: true },
    zipcode: { type: 'string', required: true }, // maybe should be a number
  },
};