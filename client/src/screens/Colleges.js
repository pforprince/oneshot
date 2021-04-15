import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Colleges = ({match}) => {
  const history = useHistory();
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get(`/college/state/${match.params.state}`)
      .then((data) => {
        setColleges(data.data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "students",
      key: "students",
      dataIndex: "students",
    },
    {
      title: "Year",
      key: "year",
      dataIndex:"year"
    },
  ];
  return (
    <div style={{ padding: "2rem 10rem" }}>
      <Table
        columns={columns}
        dataSource={colleges}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              history.push(`/college/id/${record._id}`);
            }, // click row
          };
        }}
      />
    </div>
  );
};

export default Colleges;
