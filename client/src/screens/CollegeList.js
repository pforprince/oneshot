import React from "react";
import { List, Typography } from "antd";
import PieChart from "../components/PieChart";
import axios from "axios";
const CollegeList = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios
      .get("/college/all")
      .then((data) => setColleges(data.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {colleges.length < 0 ? (
        <h2>Loading</h2>
      ) : (
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default CollegeList;
