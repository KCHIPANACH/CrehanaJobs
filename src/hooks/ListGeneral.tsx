import React from "react";
import JobsCards from "./JobsCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { LoopCard } from "../components/LoopCard";

export const GRAPH_FILTER = gql`
query FilterJobs(
  $title: String
  $companyId: ID
  $countryId: ID
  $order: JobOrderByInput
) {
  countries {
    jobs(
      orderBy: $order
      where: {
        title_contains: $title
        AND: {
          company: { id_contains: $companyId }
          AND: { countries_every: { id_contains: $countryId } }
        }
      }
    ) {
      id
      title
      commitment {
        id
        title
      }
      company {
        id
        name
      }
      cities {
        id
        name
        country {
          id
          name
        }
      }
      tags{
        id
        name
      }
      company {
        id
        name
      }
      postedAt
      applyUrl
    }
  }
}
`;

const ListGeneral = ({ title, countryId, companyId , order}):any => {
  const { loading, error, data } = useQuery(GRAPH_FILTER, {
    variables: {
      title,
      countryId,
      companyId,
      order
    }
  });
  if (loading) return "";
  if (error) return <h1>Sucedio algún error :( </h1>;

  return (
    <>
      {data.countries.map((jobs, id) => {
        return <LoopCard key={id} data={jobs} />;
      })}
    </>
  );
};

export default ListGeneral;