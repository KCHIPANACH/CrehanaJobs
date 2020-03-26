import * as React from 'react';
import moment from 'moment';


require("../styles/components/cards.scss");
interface IProps{

    id:string,
    title:string,
    applyUrl:string,
    company: any,
    postedAt: any,
    tags: any,
    cities:any

}

const Cards = (props)=>{

    const {id, title, applyUrl,company,postedAt,tags,cities}:IProps = props;
    function getDate(fecha){
        const dateToFormat = new Date(fecha);
            return moment(dateToFormat).format("YYYY/DD"); 
    }
    return(
        <>
        <a href={applyUrl} target="_blank">
            <div className="cards_jobs">
                <div className="cards_jobs__left">
                    <div className="cards_jobs_perfil">
                        <img src="https://s.gravatar.com/avatar/121215156dadasd?d=identicon" alt=""/>
                    </div>
                    <div className="cards_jobs__datos">
                        <div className="__datos_title">
                            <h3 className="c_white m_0 f_regular f_h5"> {title}</h3>
                        </div>
                        <div className="__datos_empresa">
                            <div className="_empresa__name">
                                <h3 className="f_h6 c_white m_0 f_light">{company.name}</h3>
                            </div>
                            <div className="_empresa__lugar">
                                {cities.map(item=>  <h3 className="f_h6 c_white m_0 f_light" key={item.id}> {item.name}</h3> ) }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards_jobs__right">
                    <div className="card_jobs_tags">
                    {tags.map(item=>
                        <div className="card_tags" key={item.id}>
                            <h3 className="f_h7 c_white m_0 f_light">
                                {item.name}
                            </h3>
                        </div>
                    )}

                    </div>

                    <div className="card_jobs__date">
                    <h3 className="f_h6 f_light m_0 c_white "> {getDate(postedAt) }</h3>
                    </div>
                </div>


            </div>
            </a>
        </>
    );

}

export default Cards;