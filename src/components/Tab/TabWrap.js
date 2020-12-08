import React, { useState, useEffect, useRef } from 'react'
import TabsRow from "./TabsRow"
import { VscChevronLeft, VscChevronRight, VscAdd } from "react-icons/all"
import TabIntersectionWrapper from "./TabIntersectionWrapper"
import styled from "styled-components"
import classnames from "classnames"
function TabWrap({
    scrollLeft,
    scrollRight,
    isIntersectingRight,
    isIntersectingLeft,
    setElementLeft,
    setElementRight,
    tabs,
    setTabItem,
    setSelectedContent,
    selectedContent,
    themeColor,
    showNavigators,
    uniqueId
}) {

    const ChevronLeft = styled.div`
    svg{
        &:hover{
            color:${themeColor} !important;
        }
    }
    `
    const chevronLeft = classnames(
        {
            'st__tab-wrap__left-container--visible': !isIntersectingLeft,
            'st__tab-wrap__left-container--hidden': isIntersectingLeft
        }
    )

    const ChevronRight = styled.div`
    svg{
        &:hover{
            color:${themeColor} !important;
        }
    }
    `
    const chevronRight = classnames(
        {
            'st__tab-wrap__right-container--visible': !isIntersectingRight,
            'st__tab-wrap__right-container--hidden': isIntersectingRight
        }
    )

    const addTab = () => {
        if (tabs.length < 10) {
            let data = {
                id: Math.floor(100000000 + Math.random() * 900000000),
                name: `Tab ${tabs.length + 1}`,
                title: `Lorem Ipsum ${tabs.length + 1} `,
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
            }
            setTabItem((prev) => [...prev, data])
        }
    }

    return (
        <div className="st__tab-wrap">
            {showNavigators && <div className="st__tab-wrap__left-container">
                <ChevronLeft className={chevronLeft} onClick={scrollLeft}>
                    <VscChevronLeft size={24} />
                </ChevronLeft>
            </div>}
            <TabsRow
                setElementRight={setElementRight}
                setElementLeft={setElementLeft}
                tabs={tabs}
                setTabItem={setTabItem}
                setSelectedContent={setSelectedContent}
                selectedContent={selectedContent}
                themeColor={themeColor}
                uniqueId={uniqueId}
            />
            <div className="st__tab-wrap__right-container">
                {showNavigators && <ChevronRight className={chevronRight} onClick={scrollRight} >
                    <VscChevronRight size={24} />
                </ChevronRight>}
                <div onClick={addTab} >
                    <VscAdd size={24} />
                </div>
            </div>
        </div>
    )
}

export default TabIntersectionWrapper(TabWrap)
