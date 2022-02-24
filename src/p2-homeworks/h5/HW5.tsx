import React from 'react'
import Header from './Header'
import RouteLinks from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <RouteLinks/>

            </HashRouter>
        </div>
    )
}

export default HW5
