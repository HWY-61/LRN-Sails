module.exports = {
  attributes: {
    // id: { type: 'number', autoIncrement: true },
    user_id: { type: 'number', required: true }, // // need to link foreign key
    event_document_id: { type: 'number', required: true }, // need to link foreign key
  },
};