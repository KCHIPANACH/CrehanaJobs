import React from 'react';
import Topbar from '../components/Topbar';
import {ListJobs} from '../components/Main';
/* css grilla simple.css */
require('../styles/simple.scss');
require('../styles/main.scss');


const App  = (props) =>{

    return(
        <>  
            <Topbar />
            <hr className="separador"/>
            <ListJobs />
        </> 
    );

}

export default App;