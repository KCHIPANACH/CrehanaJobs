import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Country from "../components/filtro/country";

const obtainCountry = gql`
query getCountries {
    countries {
      id,
      name
    }
  }
`;

export const CountryList = (props):any => {
    const countryChange = (value) => {
        props.onChange(value)
    }

    const { loading, error, data } = useQuery(obtainCountry);
    if (loading) return "Loading...";
    if (error) return console.log(error);

    return <Country onChange={countryChange} data={data} />;
};
