const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the model
const huntSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  title: { type: String, default: 'Untitled Hunt' },
  public: { type: Boolean, default: true },
  questions: { type: Array, default: [] },
  active: { type: Boolean, default: true },
  link: { type: String, unique: true }
});

const ModelClass = mongoose.model('hunt', huntSchema);
module.exports = ModelClass;
