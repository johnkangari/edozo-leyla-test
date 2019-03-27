import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Lease from './components/comps/lease'
import Sale from './components/comps/sale'
import Group from './components/comps/group'
import NotFound from './components/notFound'

const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={Lease}/>
                <Route path="/comps/sale" exact component={Sale}/>
                <Route path="/comps/group" exact component={Group}/>
                {/* <Route path="*"  component={NotFound}/> */}
            </Switch>
        )
}

export default Routes;