const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the model
const gameSchema = new Schema({
  students: { type: Array },
  hunt_id: { type: Schema.Types.ObjectId, ref: 'hunt', required: true },
  completed: { type: Boolean, default: false },
  responses: { type: Array, default: [] }
}, { timestamps: true });

const modelClass = mongoose.model('game', gameSchema);
module.exports = modelClass;
