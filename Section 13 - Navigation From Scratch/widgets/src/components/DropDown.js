import React, { useState, useEffect, useRef } from 'react';

const DropDown = ({ options, message, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = event => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    const renderedOpions = options.map((option) => {

        if (option.value === selected.value) {
            return null;
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className="dropdown-form ui form">
            <div className="field">
                <div className="label">{message}</div>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open === true ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open === true ? 'visible transition': ''}`}>
                        {renderedOpions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;