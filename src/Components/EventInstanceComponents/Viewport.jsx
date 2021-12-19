import React, { useEffect } from 'react'

const Viewport = ({children}) => {

    useEffect(() => {
        console.log('children', children)
    }, [children])

    const renderChildren = () => {
        return children.map((child) => {
            return (
                <div className="viewport-carousel">
                    {
                        <div className='carousel-card card'>
                            <h2 className='content'>{child}</h2>
                        </div>
                    }
                </div>
            )
        })
    }
    


    return (
        <div className='viewport-wrapper'>
            <section className='viewport-carousel-wrapper' >
                {children && renderChildren()}
            </section>
        </div>
    )
}

export default Viewport
