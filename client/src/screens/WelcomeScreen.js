import React, { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import randomcolor from "randomcolor";
import axios from "axios";
const WelcomeScreen = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("/college/group")
      .then((data) => {
        setStats(data.data.data);
        const colleges = [];
        data.data.data.map((i) => {
          i.color = randomcolor({format:"hsla"});
          i.label = i._id;
          i.id= i._id
          colleges.push(i);
        });
        setStats(colleges)
        console.log(colleges);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div style={{ padding: "0rem 20rem" }}>
      <PieChart name="College" stats={stats} />
      {/* <PieChart name="Courses" /> */}
    </div>
  );
};

export default WelcomeScreen;
