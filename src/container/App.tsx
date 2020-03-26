import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Topbar from '../components/Topbar';
import Main from '../components/Main';
/* css grilla simple.css */
require('../styles/simple.scss');
require('../styles/main.scss');

interface IProps{
    title: string;
}


const EXCHANGE_RATES = gql`
{
  jobs {
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
`;


const App  = (props) =>{
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
   const {client} = props;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return(
        <>  
            <Topbar data={data.jobs} />
            <hr className="separador"/>
            <Main info={data.jobs}/>
        </>
    );

}

export default App;