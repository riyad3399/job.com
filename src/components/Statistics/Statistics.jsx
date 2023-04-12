import React from "react";

import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const Statistics = () => {
  const assignmentMarks = [
    { id: "A1", name: "Assignment 1", mark: 57 },
    { id: "A2", name: "Assignment 2", mark: 58 },
    { id: "A3", name: "Assignment 3", mark: 50 },
    { id: "A4", name: "Assignment 4", mark: 56 },
    { id: "A5", name: "Assignment 5", mark: 57 },
    { id: "A6", name: "Assignment 6", mark: 50 },
    { id: "A7", name: "Assignment 7", mark: 60 },
  ];

  return (
    <div className="mt-44 ml-36">
      <p className="text-2xl font-semibold my-10 text-center">AssignmentMarks</p>
      <div className="mb-20">
        <AreaChart width={1000} height={300} data={assignmentMarks}>
          <XAxis dataKey="id" />
          <YAxis dataKey="mark" />
          <Area dataKey="mark" stroke="#8884d8" />
          <Area dataKey="name" />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
