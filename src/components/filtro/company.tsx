import React from "react";

const Company = ({
  data: { companies = [] } = {},
  onChange
}) => {
  const onCompanyChange = e => {
    const countrySelected = e.target.value;
    if(e.target.value == ""){
      location.reload()
    }
    onChange(countrySelected);
  };
  return (
        <div className="filtros__empresa">
            <p className="m_0 f_light f_h7 c_white"> Compañia</p>
            <select className="select_fitro" onChange={onCompanyChange}>
                <option value=""> Compañia </option>
              {companies.map(company => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
        </div>
  );
};

export default Company