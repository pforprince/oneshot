const College = require("../models/CollegeModel");

const findCollegeByID = async (req, res) => {
  try {
    const { id } = req.params;
    const requestedCollege = await College.findById(id);

    res.status(200).json(requestedCollege);
  } catch (error) {
    console.log(error);
  }
};

const findCollegeByName = async (req, res) => {
  try {
    const { name } = req.params;
    const requestedCollege = await College.find({ name });

    res.status(200).json(requestedCollege);
  } catch (error) {
    console.log(error);
  }
};

const getAllColleges = async (req, res) => {
  const colleges = await College.find();
  res.status(200).json(colleges);
};

const findCollegeByState = async (req, res) => {
  try {
    const { state } = req.params;
    const requestedCollege = await College.find({ state });
    // console.log(state);
    res.status(200).json(requestedCollege);
  } catch (error) {
    console.log(error);
  }
};

const findCollegeByCity = async (req, res) => {
  try {
    const { city } = req.params;
    const requestedCollege = await College.find({ city });

    res.status(200).json(requestedCollege);
  } catch (error) {
    console.log(error);
  }
};

const findCollegeByCountry = async (req, res) => {
  try {
    const { country } = req.params;
    const requestedCollege = await College.find({ country });

    res.status(200).json(requestedCollege);
  } catch (error) {
    console.log(error);
  }
};

const addCollege = async (req, res) => {
  try {
    const { name, year, city, state, country, students, courses } = req.body;
    const college = new College({
      name,
      year,
      city,
      state,
      country,
      students,
      courses,
    });

    const savedCollege = await college.save();
    res.status(200).json({ message: "College added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const addFakeColleges = async (req, res) => {
  for (var i = 0; i < 10; i++) {
    const college = new College({
      name: `College ${i + 1}`,
      city: "Mohali",
      students: Math.random() * 9000,
      courses: ["B.TECH", "BBA", "BCOM"],
      year: 1980 + i,
      country: "India",
      state: "Punjab",
    });
    await college.save();
  }

  res.status(200).json({ message: "Colleges saved succesfully" });
};

const groupBy = async (req, res) => {
  const data = await College.aggregate([
    {
      $group: {
        _id: "$state",
        value: { $sum: 1 },
      },
    },
  ]);
  res.json({ data });
};

module.exports = {
  findCollegeByID,
  findCollegeByName,
  groupBy,
  addCollege,
  findCollegeByCountry,
  addFakeColleges,
  getAllColleges,
  findCollegeByState,
  findCollegeByCity,
};
