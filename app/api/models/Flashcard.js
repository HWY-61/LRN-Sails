module.exports = {
  attributes: {
    // id: { type: 'number', autoIncrement: true },
    questions: { type: 'string', required: true },
    answer: { type: 'string', required: true },
    pack_id: {type:'number', recquired:true}, // need to link this foreign key
  },
};