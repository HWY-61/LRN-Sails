module.exports = {
  tableName: "Topic",
  attributes: {
    id: { type: 'number', autoIncrement: true },
    name: { type: 'string', required: true },
  },
};