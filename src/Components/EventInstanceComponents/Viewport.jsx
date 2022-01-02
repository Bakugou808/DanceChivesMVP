import React, { useEffect, useState } from 'react'

const Viewport = ({children, selectedKey, childSelector, breadcrumb}) => {
    
    useEffect(() => {
        console.log('children', children)
    }, [children])

    const [showForm, setShowForm] = useState(false)

    const renderChildren = () => {

        //Skips the brackets/judges child selector
        if(children.includes("brackets") && children.includes("judges")){
            childSelector("brackets")
            return (<div></div>)
        }

        //This renders the video cards and disables the child selector
        //TODO Add an onClick function like videoSelector to handle expanding a video
        if(breadcrumb.battle){
            console.log(children)
            return (
                <div>VIDEO HERE</div>
            )
        }

        return children.map((child) => {
            return (
                <div className="viewport-carousel">
                    {
                        <div className='carousel-card card' onClick={()=>childSelector(child)}>
                            <h2 className='content'>{child}</h2>
                        </div>
                    }
                </div>
            )
        })
    }

    const renderBreadcrumb = () => {
        return Object.entries(breadcrumb).map(([key, val]) => {
            if (val){
                return (
                    <li>{key}-->{val}</li>
                )
            }
        })
    }
    
    


    return (
        <div className='viewport-wrapper'>
            <ul className='viewport-breadcrumbs'>
                {breadcrumb && renderBreadcrumb()}
            </ul>
            
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
    