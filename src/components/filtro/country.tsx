import React from "react";


const Country = ({
  data: { countries = [] } = {},
  onChange
}:any) => {
  const onChangeCountry = e => {
    const countrySelected = e.target.value;
    if(e.target.value == ""){
      location.reload()
    }
    onChange(countrySelected);
  };

  return (
        <div className="filtros__pais">
            <p className="m_0 f_light f_h7 c_white"> Pais </p>
            <select className="select_fitro" onChange={onChangeCountry}>
            <option value=""> Pais </option>
               
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
             ))}
            </select>
        </div>
  );
};

export default Country;