import React from 'react'
import Tab from "./Tab"
export default function TabsRow({
    setElementRight,
    setElementLeft,
    tabs,
    setTabItem,
    setSelectedContent,
    selectedContent,
    uniqueId,
    themeColor }) {

    const selectTab = (item) => { // Making any tab active on the DOM
        setSelectedContent(item)
    }

    return (
        <div className="st__tabs-row" id={`tab-row-${uniqueId}`}>
            {tabs.map((item, index) => {
                return (
                    <div ref={index == 0 ? setElementLeft : index == tabs.length - 1 ? setElementRight : undefined} key={index}
                        onClick={() => selectTab(item)}
                    >
                        <Tab
                            name={item.name}
                            key={index}
                            setSelectedContent={setSelectedContent}
                            id={item.id}
                            tabs={tabs}
                            selectedContent={selectedContent}
                            setTabItem={setTabItem}
                            themeColor={themeColor}
                        />
                    </div>
                )
            })}
        </div>
    )
}
