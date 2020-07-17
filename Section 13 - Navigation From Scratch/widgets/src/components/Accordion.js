import React, { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [open, setOpen] = useState(false);

    const onTitleClicked = index => {
        if (!open) {
            setActiveIndex(index);
            setOpen(true)
        } else if (index === activeIndex) {
            setOpen(false)
        } else {
            setActiveIndex(index);
            setOpen(true);
        }
    }

    const itemsList = items.map( (item, index) => { 

        const active = (index === activeIndex && open) ? 'active': '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
                    <i className="dropdown icon" />
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className="ui styled fluid accordion">
                {itemsList}
            </div>
        </div>
    )
}

export default Accordion;