module.exports = {
  attributes: {
    // id: { type: 'number', autoIncrement: true },
    name: { type: 'string', required: true },
    user_id: { type: 'number', required: true }, // need to link this foreign key
  },
};