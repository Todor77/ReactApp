import React from "react";
import { Link } from "react-router-dom";

const home = () => {
    return (
        <div>
            <h1>Home</h1>
             <hr/>
            <Link to={"/about"}><button className="btn-primary"> Weiter</button></Link>
        </div>
    )
};

export default home;
