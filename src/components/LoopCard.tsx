import React from "react";
import Cards from "./Cards";


export const LoopCard = ({
  data: { jobs = [] } = {}
}) => (
    <ul>
      {jobs.map(job => (
        <Cards key={job.id} {...job} />
      ))}
    </ul>
  );