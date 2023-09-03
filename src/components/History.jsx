import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const History=()=>{

    const {wordsList} = useSelector(state=>state)

    return (
        <div className="history-page">
            <h2> Search History</h2>

            <div className="history-list">
                {
                    wordsList.map((word,index)=>
                        <div key={crypto.randomUUID()} className="word">
                            <NavLink key={index} to={`/word/${word}`}>{word}</NavLink>
                        </div>
                    )
                }
            </div>
            <Outlet/>
        </div>
    )
}

export default History