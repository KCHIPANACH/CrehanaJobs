 
import React from "react";
import SelectFilter  from "../components/SelectFilter";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


const obtainCompany = gql`
    query Companies {
    companies {
      id
      name
    }
  }
`;

const obtainContry = gql`
query Countries {
    countries {
      id
      name
    }
  }
`;

const getQuery= (tipo) =>{
    let respuest;
    if(tipo=="Pais"){
        respuest = obtainContry;
    }else{
        respuest = obtainCompany;
    }
    return respuest;
}

export const CompaniesList:any = (props) => {
    const {onChange, tipo} = props;
  const changeCompany = (value) => {
    onChange(value)
  }

  const { loading, error, data } = useQuery(getQuery(tipo));
  if (loading) return "Loading...";

  return <SelectFilter onChange={changeCompany} jobs={data} tipo={tipo} />;
};