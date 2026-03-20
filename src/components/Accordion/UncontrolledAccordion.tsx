import { useState } from 'react';

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean;
};

function UncontrolledAccordiondion(props: AccordionPropsType) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                handleCollapsed={handleCollapsed}
            />
            {/* <button onClick={()=>{setIsCollapsed(!isCollapsed)}}>toggle</button> */}
            {isCollapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsValue = {
    title: string;
    handleCollapsed: () => void;
};

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3 onClick={props.handleCollapsed}>{props.title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordiondion;

//что нужжно доделать:
//1. uncontrolled rating
//2. попробовать не создавать кнопки
