import '../../App.css';
import {Link} from "react-router-dom";
import React from "react";
function Vasya(){
    return (<div className={'app'}>
            <><Link to={'/'}>Home-></Link><Link to={'/users'}>Users-></Link><Link to={'/vasya'}>Vasya</Link></>
            <div className={'container'}>
                <ul>
                    <li><Link className={'link'} to={'/'}>Home</Link></li>
                    <li><Link  className={'link'} to={'/users'}>Users</Link></li>
                    <ul>
                        <li><Link className={'link'} to={'/users/vasya'}>Vasya</Link></li>
                        <li><Link className={'link'} to={'/users/peter'}>Peter</Link></li>
                    </ul>
                </ul>

            </div>
        </div>
    );
}

export default Vasya;
