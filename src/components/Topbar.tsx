import * as React from 'react';

/* imagenes */
const logo = require("../assets/logo.png");
require("../styles/components/topbar.scss");


interface IProps{
    data: any
}

const Topbar = (props)=>{
    
    const {data} = props;

    return(
        <>
            <div className="contenedor_topbar">
                
                <div className="contenedor_topbar__left">
                    <div className="__left__icon">
                        <img src={logo} alt=""/>
                        <div className="__left_icon__text">
                            <h3 className="m_0 f_h5 f_ubuntu c_white">CrehanaJobs</h3>
                        </div>
                    </div>
                    <div className="__left__search">
                        <input type="text" placeholder="Buscar empleos: Relacionados a GraphQL" />
                        <img src="" alt=""/>
                    </div>
                </div>

                <div className="contenedor_topbar__right">
                    <div className="__right_perfil_img">
                        <img src="" alt=""/>
                    </div>
                    <div className="__right_perfil__name">
                        <h3 className="f_h6 m_0 c_white" > Kevin Chipana </h3>
                    </div>
                </div>


            </div>
        </>
    );

}

export default Topbar;