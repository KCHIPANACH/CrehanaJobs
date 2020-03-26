import React from 'react';

const SelectFilter = (props)=>{
    const {jobs, tipo, onChange} = props;
    
    const getData = (ts)=>{

        let array_pos:any = [];
        let array_final:any = [];

        if(ts=="Pais"){
            jobs.countries.map(item=> array_pos.push([item.id, item.name]))
            array_final = Array.from(new Set(array_pos));
        }else{
            jobs.companies.map(item=> array_pos.push([item.id, item.name]))
            array_final = Array.from(new Set(array_pos));
        }

        return array_final;
    }

    return(
        <>
            <div className="filtros__pais">
                  <p className="m_0 f_light f_h7 c_white"> {tipo} </p>
                   <select className="select_fitro" onChange={(e)=>onChange(e.target.value)}>
                       <option > {tipo} </option>
                       {getData(tipo).map((item,i)=> 
                        <option value={item[0]} key={i}> {item[1]} </option>
                        )}
                    </select>
            </div>        
        </>
    );
}

export default SelectFilter;