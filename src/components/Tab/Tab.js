import React, { useState } from 'react'
import classnames from "classnames"
import { GrFormClose, RiDragMoveFill } from "react-icons/all"
import Draggable from 'react-draggable'
import styled from "styled-components"
export default function Tab({ name, id, setSelectedContent, tabs, selectedContent, setTabItem, themeColor }) {
    const [activeClass, setActiveClass] = useState(false)
    const [activeDrags, setActiveDrags] = useState(0)

    const selectTab = (e) => {
        setSelectedContent(tabs.findIndex((item) => item.id == id))
    }

    const active = classnames('st__tab', {
        'st__tab--active': selectedContent.id == id
    })

    const TabWrap = styled.div`
      ${selectedContent.id == id && themeColor &&
        `border-bottom:2px solid ${themeColor} `
        } !important;
     p{
        color:${selectedContent.id == id ? themeColor : undefined} !important;
     }
     span{
         div{
             svg{
                ${selectedContent.id == id && themeColor &&
        `color:${themeColor} `
        } !important;   
             }
         }
     }
    `

    const deleteTab = () => {
        let newItem = tabs.filter((item) => item.id !== id)
        setTabItem(newItem)
        setSelectedContent(tabs[0])

    }

    const onStart = () => {
        setActiveDrags((prev) => ++prev)
    };

    const onStop = () => {
        setActiveDrags((prev) => --prev)
    };

    const dragHandlers = { onStart: onStart, onStop: onStop };

    return (

        <Draggable {...dragHandlers} axis="x" bounds=".st__tabs-row" handle="span" >
            <TabWrap className={active} onMouseEnter={() => setActiveClass(true)} onMouseLeave={() => setActiveClass(false)} >
                <p>{name}</p>
                {activeClass &&
                    <div className="st__tab--close" onClick={deleteTab} >
                        <GrFormClose size={15} />
                    </div>}
                {activeClass && <span>
                    <div>
                        <RiDragMoveFill size={15} />
                    </div>
                </span>}
            </TabWrap>
        </Draggable>

    )
}
