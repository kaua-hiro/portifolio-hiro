import React, { useState } from 'react';

function Accordion(props) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((o) => !o);

    return (
        <div data-aos={props.dataAos} data-aos-delay={props.dataAosDelay} >
            <div className={`accordion ${open ? 'active' : ''}`}>
                <div
                    className="accordion-heading"
                    role="button"
                    tabIndex={0}
                    aria-expanded={open}
                    onClick={toggle}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            toggle()
                        }
                    }}
                >
                    <h3>{props.title}</h3>
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </div>
                <p className="accordioin-content">
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default Accordion
