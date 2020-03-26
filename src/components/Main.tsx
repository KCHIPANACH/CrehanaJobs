import React, {useEffect} from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


/* import Cards from './Cards'; */



interface IProps{
    data: any
}


const Main = (props)=>{
  let {info} = props;

    return(   
        <>
            <div className="contenedor_main">
                <div className="container">

                    <div className="resultado_header">
                            <div className="title_container">
                                <h3 className="f_h3 m_0 c_white">Empleos para ti</h3>
                            </div>
                            <div className="filtros">

                                <div className="filtros__ordenar">
                                    <p className="m_0 f_light f_h7 c_white"> Ordenar</p>
                                    <select className="select_fitro">
                                        <option> Sueldo </option>
                                        <option> Nombre </option>
                                    </select>
                                </div>
                            </div>
                    </div>

{/*                     <div className="contenedor_cards">
                        {info.map( item=>
                        <Cards key={item.id} {...item} />
                        )}
                    </div> */}

                </div>
            </div>
        </>
    );

}

export default Main;