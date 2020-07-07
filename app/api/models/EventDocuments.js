/*
This is a join table for event documents
have to link the foreign keys
 */
module.exports = {
  attributes: {
    // id: { type: 'number', autoIncrement: true },
    event_id: { type: 'number', required: true }, // need to link foreign key
    document_id: { type: 'number', required: true }, // need to link foreign key
  },
};