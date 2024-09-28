"use client";

import React,{useState} from 'react'

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="footer-menu disclosure">
                <div className={`disclosure__head ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                    <div className="flex justify-between items-center">
                        <h2 className="disclosure__title ">{title}</h2>
                        <span className="disclosure__toggle">
                            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" className="icon"><path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path></svg>
                        </span>
                    </div>
                </div>
                <div className={`disclosure__panel ${!isOpen ? "" : "collapsed"}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Accordion