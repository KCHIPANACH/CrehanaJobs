import React,{ useState } from 'react';

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'


import Cards from './Cards';
import {CompaniesList} from '../hooks/CompaniesList';

require("../styles/components/main.scss");

interface IProps{
    data: any
}

const obtainJobs = graphql(gql`
query getJobs{
  jobs{
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
`);

const Main = (props) =>{
    const{jobs} = props;
    const [state, setState]:any = useState({...props});

      const onSearchChange = value => {
        setState({ textSearch: value });
      };
      const onCountryChange = value => {
        setState({ countryId: value });
      };
      const onCompanyChange = value => {
        /* setState({ companyId: value }); */
/*         setState(()=>{
            state.map(item=>console.log(item))
        }) */
        console.log(state)
      };
      const onOrderChange = value => {
        setState({ order: value });
      };
    return(   
        <>
            <div className="contenedor_main">
                <div className="container">

                    <div className="resultado_header">
                            <div className="title_container">
                                <h3 className="f_h3 m_0 c_white">Empleos para ti</h3>
                            </div>
                            <div className="filtros">
                                <CompaniesList onChange={onCountryChange} jobs={jobs} tipo="Pais" />
                                <CompaniesList onChange={onCompanyChange} jobs={jobs} tipo="Compañia"/>
                                <div className="filtros__ordenar">
                                    <p className="m_0 f_light f_h7 c_white"> Ordenar</p>
                                    <select className="select_fitro">
                                        <option> Sueldo </option>
                                        <option> Nombre </option>
                                    </select>
                                </div>
                            </div>
                    </div>

                    <div className="contenedor_cards">
{/*                         {jobs.map( item=>
                        <Cards key={item.id} {...item} />
                        )} */}
                    </div>

                </div>
            </div>
        </>
    );

}

export const ListJobs = obtainJobs(Main);