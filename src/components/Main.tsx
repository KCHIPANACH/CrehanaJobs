import React, {useEffect} from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


import Cards from './Cards';

require("../styles/components/main.scss");

interface IProps{
    data: any
}


const Main = (props)=>{
  let {info,client} = props;
/*   if (loading) return <p>Loading...</p>;
  if (error) return console.log(error); */

  const getCities = () =>{

    let array_cities:any = [];
    info.map(item=> ((item.cities[0])) ? array_cities.push(item.cities[0].name) : console.log("oops"))
    let uniqueItem = Array.from(new Set(array_cities));
    return uniqueItem
  }

  const getCompany = () =>{
    let array_company:any = [];
    info.map(item=> ((item.company)) ? array_company.push(item.company.name) : console.log("oops"))
    let uniqueItem = Array.from(new Set(array_company));
    return uniqueItem
  }
    const filterCompañia = (event)=>{
    info = info.filter(info => info.company.name == event.target.value);


    }



    return(   
        <>
            <div className="contenedor_main">
                <div className="container">

                    <div className="resultado_header">
                            <div className="title_container">
                                <h3 className="f_h3 m_0 c_white">Empleos para ti</h3>
                            </div>
                            <div className="filtros">
                                <div className="filtros__pais">
                                    <p className="m_0 f_light f_h7 c_white"> Pais </p>
                                    <select className="select_fitro">
                                       {/*  {console.log(array_unicos.map())} */}
                                       <option > Pais </option>
                                        {getCities().map((item,i)=> 
                                        <option key={i}> {item} </option>
                                        )}
                                    </select>
                                </div>
                                <div className="filtros__empresa">
                                    <p className="m_0 f_light f_h7 c_white"> Compañia</p>
                                    <select className="select_fitro" onChange={(e)=> filterCompañia(e)}>
                                        <option > Compañia </option>
                                        {getCompany().map((item,i)=> 
                                        <option key={i}> {item} </option>
                                        )}
                                    </select>
                                </div>
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
                        {info.map( item=>
                        <Cards key={item.id} {...item} />
                        )}
                    </div>

                </div>
            </div>
        </>
    );

}

export default Main;