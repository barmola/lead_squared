import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Header, TabsWrap, TabContent } from "./"

export default function ScrollableTab({ title, themeColor, showNavigators, titleLogo, tabs, setTabItem }) {
    const [tabItem, setTab] = useState([
        {
            id: Math.floor(100000000 + Math.random() * 900000000),
            name: "Tab 1",
            title: "Progressive Web Apps",
            description: "A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript."
        },
        {
            id: Math.floor(100000000 + Math.random() * 900000000),
            name: "Tab 2",
            title: "Next JS",
            description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
        },
        {
            id: Math.floor(100000000 + Math.random() * 900000000),
            name: "Tab 3",
            title: "Web Assembly",
            description: "WebAssembly is an open standard that defines a portable binary-code format for executable programs, and a corresponding textual assembly language, as well as interfaces for facilitating interactions between such programs and their host environment."
        },
    ])
    const [selectedContent, setSelectedContent] = useState(tabs !== undefined && tabs.length > 0 ? tabs[0] : tabItem[0])
    return (
        <div className="st">
            {(title || titleLogo) &&
                <Header title={title} titleLogo={titleLogo} />}
            <TabsWrap
                tabs={tabs !== undefined && tabs.length > 0 ? tabs : tabItem}
                setTabItem={tabs !== undefined && tabs.length > 0 ? setTabItem : setTab}
                setSelectedContent={setSelectedContent}
                selectedContent={selectedContent}
                themeColor={themeColor}
                showNavigators={showNavigators}
            />
            <TabContent tabs={tabItem} selectedContent={selectedContent} />
        </div>
    )
}



ScrollableTab.propTypes = {
    title: PropTypes.string,
    tabs: PropTypes.array.isRequired,
    themeColor: PropTypes.string,
    showNavigators: PropTypes.bool
}


