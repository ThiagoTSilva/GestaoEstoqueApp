import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';
import Agendamento from './pages/Agendamento';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Login}/>
            <Route path='/Agendamento' component={Agendamento} />
        </BrowserRouter>
    );
}