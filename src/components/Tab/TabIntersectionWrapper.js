import React, { useState, useRef, useEffect } from 'react'

const TabIntersectionWrapper = WrapperComponent => {

    const UpdatedComponent = (props) => {
        const [scrollValue, setScrollValue] = useState(0)
        const [elementRight, setElementRight] = useState(null)
        const [elementLeft, setElementLeft] = useState(null)
        const [isIntersectingRight, setIntersectionRight] = useState(false)
        const [isIntersectingLeft, setIntersectionLeft] = useState(true)
        const [uniqueId, setUniqueId] = useState(Math.floor(100000000 + Math.random() * 900000000))  //Creating Unique Id for Tab Rows

        const observerRight = useRef(new IntersectionObserver((entries) => { //Observing the visibility of Right Chevron in the DOM
            const first = entries[0]
            setIntersectionRight(false)
            if (first.isIntersecting) {
                setIntersectionRight(true)
            }

        }, { threshold: 0.25 }))

        const observerLeft = useRef(new IntersectionObserver((entries) => {//Observing the visibility of Left Chevron in the DOM
            const first = entries[0]
            setIntersectionLeft(false)
            if (first.isIntersecting) {
                setIntersectionLeft(true)
            }

        }, { threshold: 0.25 }))

        const scrollRight = (e) => { // Scrolling Right
            e.persist()
            console.log("Event:", e)
            if (!isIntersectingRight) {
                setScrollValue(scrollValue + 120)
            }
        }

        const scrollLeft = () => {// Scrolling Left
            if (!isIntersectingLeft) {
                setScrollValue((prev) => { if (prev >= 120) { return prev - 120 } else return 0 })
            }
        }

        useEffect(() => {
            if (uniqueId !== null) {
                var scroll = document.querySelector(`#tab-row-${uniqueId}`)
                scroll.scrollTo({ left: scrollValue, behavior: "smooth" })
            }
        }, [scrollValue])

        useEffect(() => {
            const currentElement = elementRight;
            const currentObserver = observerRight.current;
            if (currentElement) {
                currentObserver.observe(currentElement)
            }
            return () => {
                if (currentElement) {
                    currentObserver.unobserve(currentElement)
                    setIntersectionRight(false)
                }
            }
        }, [elementRight])
        useEffect(() => {
            const currentElement = elementLeft;
            const currentObserver = observerLeft.current;
            if (currentElement) {
                currentObserver.observe(currentElement)
            }
            return () => {
                if (currentElement) {
                    currentObserver.unobserve(currentElement)
                    setIntersectionLeft(false)
                }
            }
        }, [elementLeft])
        return (
            <WrapperComponent
                {...props}
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
                isIntersectingLeft={isIntersectingLeft}
                isIntersectingRight={isIntersectingRight}
                setElementLeft={setElementLeft}
                setElementRight={setElementRight}
                scrollValue={scrollValue}
                uniqueId={uniqueId}
            />
        )
    }
    return UpdatedComponent
}


export default TabIntersectionWrapper