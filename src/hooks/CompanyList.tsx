import React from "react";
import  Company  from "../components/filtro/company";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const obtainCompanys = gql`
query getCompanies {
  companies {
    id,
    name
  }
}
`;

export const CompanyList = (props):any => {
  const companyChange = (value) => {
    props.onChange(value)
  }

  const { loading, error, data } = useQuery(obtainCompanys);
  if (loading) return "Loading...";

  return <Company onChange={companyChange} data={data} />;
};
