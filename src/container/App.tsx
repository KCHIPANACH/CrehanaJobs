import React, {Component} from 'react';

import ListGeneral from '../hooks/ListGeneral';
import Tobar from '../components/Topbar';
import {CompanyList} from '../hooks/CompanyList';
import {CountryList} from '../hooks/CountryList';

/* css grilla simple.css */

require('../styles/simple.scss');
require('../styles/main.scss');
require("../styles/components/main.scss");

class App extends Component {
  state = {
   id:"", textSearch: "", countryId: "", companyId: "", order:"postedAt_ASC", tags: {id:"", name:""}, cities:{id:"", name:""}
  };

  changeSearch = value => {
    this.setState({ textSearch: value });
  };
  changeCountry = value => {
    this.setState({ countryId: value });
  };
  changeCompany = value => {
    this.setState({ companyId: value });
  };
  render() {
    const {id, textSearch, countryId, companyId,order } = this.state;
    return (
        <>
        <Tobar onChange={this.changeSearch} />
            <div className="contenedor_main">
                <div className="container">

                    <div className="resultado_header">
                            <div className="title_container">
                                <h3 className="f_h3 m_0 c_white">Empleos para ti</h3>
                            </div>
                            <div className="filtros">
                                <CompanyList onChange={this.changeCompany} />
                                <CountryList onChange={this.changeCountry} />
{/*                                 <div className="filtros__ordenar">
                                    <p className="m_0 f_light f_h7 c_white"> Ordenar</p>
                                    <select className="select_fitro">
                                        <option> Sueldo </option>
                                        <option> Nombre </option>
                                    </select>
                                </div> */}
                            </div>
                    </div>

                    <div className="contenedor_cards">
                    {textSearch || countryId || companyId  || order ? (
                    <ListGeneral
                            key={id}
                            title={textSearch}
                            countryId={countryId}
                            companyId={companyId}
                            order={order}
                        />
                        ) : (
                           ""
                          )}
                    </div>

                </div>
            </div>
      </>

    );
  }
}

export default App;