const mongoose = require("mongoose");

const CollegeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  students: {
    type: Number,
    required: true,
  },
  courses: [
    {
      type: String,
      required: true,
    },
  ],
});

const College = mongoose.model("College", CollegeSchema);
module.exports = College;
