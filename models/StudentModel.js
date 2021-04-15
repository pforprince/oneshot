const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
  college_id: {
    type: Number,
    required: true,
  },
  skills: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
