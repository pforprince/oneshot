const express = require("express");
const {
  addCollege,
  findCollegeByID,
  findCollegeByName,
  findCollegeByState,
  addFakeColleges,
  groupBy,
  getAllColleges,
  findCollegeByCity,

} = require("../controllers/CollegeController");
const router = express.Router();

router.get("/group", groupBy);

router.get("/state/:state", findCollegeByState);
// router.get("/name/:name", findCollegeByName);
// router.get("/:city", findCollegeByCity);
// router.get("/all", getAllColleges);
router.get("/id/:id", findCollegeByID);
// router.post("/fake", addFakeColleges);

router.post("/", addCollege);

module.exports = router;
