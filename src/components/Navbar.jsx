import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar=()=>{

    // const navigate = useNavigate()

    return(
        <div className="main">
            <div className="navbar">
                <div className="logo">
                    <h1>Dictionary App</h1>
                </div>
                <div className="sections">
                    <NavLink className="home" to='/'>Home</NavLink>
                    <NavLink className="history" to='/history'>History</NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar