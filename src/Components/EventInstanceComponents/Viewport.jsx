import React, { useEffect, useState } from 'react'

const Viewport = ({selectedData, childSelector, breadcrumb, breadcrumbSelector, info}) => {

    const children = Object.keys(selectedData)

    useEffect(() => {
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
        if(children.includes("embedUrl") && children.includes("reference")){
            console.log("SELECTED DATA", selectedData)
            return (
                <iframe width="560" height="315" src={selectedData.embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <li onClick={()=>{breadcrumbSelector(key); renderChildren()}}>
                        {key}:{val}
                    </li>
                )
            }
        })
    }

    const renderInfo = () => {

        let infoKeys = Object.keys(info)

        if(infoKeys.includes("judges")){
            return (<li>JUDGES: {info.judges}</li>)
        }

        // return Object.entries(info).map(([key, val]) => {
        //     if(key == "judges"){
        //         console.log("JUDGES", val);
        //     }

        //     if (val){
        //         return (
        //             <li>
        //                 {key}:{val}
        //             </li>
        //         )
        //     }
        // })
    }
    
    return (
        <div className='viewport-wrapper'>
            <div className='viewport-container'>
                <ul className='viewport-breadcrumbs'>
                    {breadcrumb && renderBreadcrumb()}
                </ul>
                <ul className='viewport-info'>
                    {info && renderInfo()}
                </ul>
            </div>
            
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
    