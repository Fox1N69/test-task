import React, {Component} from "react";
import './_sidebar.component.scss';

export function Sidebar() {
    return(
        <div className="component__container">
            <div className="sidebar">
                <div className="stack">
                    <img className='icon__stack' src={require('../../assets/icons/stack.png')} alt="" />
                </div>
            </div>

            <div className="divider__sidebar"></div>
        </div> 
    );
};
