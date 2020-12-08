import React from 'react'

export default function TabContent({ tabs, selectedContent }) {
    return (
        <div className="st__tab-content" >
            <h3>{selectedContent.title}</h3>
            <p>{selectedContent.description}</p>
        </div>
    )
}
