import React, { useState } from 'react'
const ViewButton = ( {gridView, setGridView} ) => {
    const onClick = () => {
        setGridView(!gridView)
    }
    return <button onClick={onClick} className="view-btn"><i className={gridView ? "fas fa-list-ul" : "fas fa-th"}></i></button>
}

export default ViewButton;