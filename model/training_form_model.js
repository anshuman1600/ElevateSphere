const { model, Schema } = require("../connection");

const trainingFormSchema = new Schema({
  name: String,
  email: String,
  phoneNo: String,
  qualification: String,
  createdAt: { type: Date, default: Date.now },
  about: String,
  file: String,
});

const TrainingFormModel = model("trainingForm", trainingFormSchema);

module.exports = TrainingFormModel;
