module.exports = {
  attributes: {
    // id: { type: 'number', autoIncrement: true },
    topic: { type: 'string', required: true },
    date: { type: 'string', required: true },
    time: { type: 'string', required: true },
    user_id: { type: 'string', required: true }, // foreign key that needs to be connected
    class_limit: { type: 'number', defaultsTo: 20, columnType: 'FLOAT'  },
  },
};