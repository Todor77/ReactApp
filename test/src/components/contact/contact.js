import React from 'react';
import {Link} from "react-router-dom";

const contact = () => {
    return (
        <div>
            <h1>Contact</h1>
             <hr/>
            <Link to={"/about"}><button className="btn-primary"> Züruck</button></Link>

        </div>
    )
};

export default contact;
