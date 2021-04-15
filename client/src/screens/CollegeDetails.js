import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";

const CollegeDetails = ({ match }) => {
  const [college, setCollege] = useState(null);
  useEffect(() => {
    console.log(match);
    axios
      .get(`/college/id/${match.params.id}`)
      .then((data) => {
        setCollege(data.data);
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return college ? (
    <div
      style={{
        textAlign: "center",
        paddingTop: "4rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>College Name- {college.name}</h2>
      <h2>College City- {college.city}</h2>
      <h2>College State- {college.state}</h2>
      <h2>College Country- {college.country}</h2>
      <h2>Founded in- {college.year}</h2>
      <h2>No of Students- {college.students}</h2>
    </div>
  ) : (
    <div
      style={{
        paddingTop: "20rem",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default CollegeDetails;
