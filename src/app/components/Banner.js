import React from 'react'

const Banner = ({title, subTitle, classBg}) => {
    return (
        <>
            <div className={`banner__section ${classBg}`}>
                <div className="banner__inn">
                    <div className="banner__title">
                        <h1>{title}</h1>
                    </div>
                    <div className="banner__subTitle">
                        <p>{subTitle}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner