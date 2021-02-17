import React, { useState } from 'react'
import {viewStyles} from "./viewStyles"
const ViewButton = () => {
    const [view, setView] = useState("grid")

    const onClick = () => {
        view === "grid" ? setView("list") : setView("grid")
    }
    return <button onClick={onClick} className="view-btn">{view}</button>
}

export default ViewButton;