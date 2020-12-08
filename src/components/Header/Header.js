import React from 'react'

export default function Header({ title, titleLogo }) {
    return (
        <div className="st__header" >
            <img src={titleLogo} />
            <h3>{title}</h3>
        </div>
    )
}
