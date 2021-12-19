import React, { useEffect } from 'react'

const StyleCard = (props) => {
    const { style, styleSelector } = props

    useEffect(() => {
        console.log(style)
    }, [style])

    return (
        <div className="card" onClick={() => styleSelector(style)}>
            <div className='content'>
                <h3>{style}</h3>
            </div>
        </div>
    )
}

export default StyleCard
