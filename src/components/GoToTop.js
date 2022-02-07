import React from "react";
import arrow from './img/arrow-up.png';
export default class GoToTop extends React.Component {
    render() {
        return (
            <a href="#top"><img id="up" src={arrow} /></a>
           
        )
    }
}