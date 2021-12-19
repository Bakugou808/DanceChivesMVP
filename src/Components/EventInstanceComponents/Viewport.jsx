import React, { useEffect, useState } from 'react'

const Viewport = ({children, selectedKey}) => {

    useEffect(() => {
        console.log('children', children)
    }, [children])

    const [showForm, setShowForm] = useState(false)

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
            <h2>{selectedKey}</h2>
            <section className='viewport-carousel-wrapper' >
                {children && renderChildren()}
            </section>
            {showForm && (
            <section className='viewport-form-wrapper'>
                <div className="component-wrapper" >
                    <div className="loginForm-cont container is-max-desktop">
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input
                                    className="input is-small"
                                    type="text"
                                    placeholder="Bracket Name"
                                    value="haiii"
                                    // onChange={(e) => setBracketState(e.target.value)}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>)
            }
        </div>
    )
}

export default Viewport
    