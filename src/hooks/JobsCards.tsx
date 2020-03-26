import React from "react";
import Cards from "../components/Cards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


const OBTAIN_JOBS = gql`
  query getJobs {
    jobs {
          id,
          applyUrl,
      title,
          postedAt,
          company{
          id,
          name
          },
          tags{
          id,
          name,
          },
          cities{
          id,
          name
          }
      }
  }
`;

const JobsCards = () => {
  const { loading, error, data } = useQuery(OBTAIN_JOBS);
  if (loading) return ' ';
  if(error) return console.log(error);

  return (
  <Cards data={data} />); 

}

export default JobsCards;