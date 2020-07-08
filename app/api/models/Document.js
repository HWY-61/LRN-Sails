module.exports = {
  tableName: "Document",
  attributes: {
    id: { type: 'number', autoIncrement: true },
    // may need to add user_id foreign key
    document_type: { type: 'string', required: true },
    link_to: { type: 'string', required: true },
  },
};