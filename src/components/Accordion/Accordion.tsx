type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} />
            <AccordionBody collapsed={props.collapsed} />
        </div>
    );
}

type AccordionTitlePropsValue = {
    title: string;
};

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3>{props.title}</h3>;
}

type AccordionBodyCollapsedPropsType = {
    collapsed: boolean;
};

function AccordionBody(props: AccordionBodyCollapsedPropsType) {
    if (!props.collapsed) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
    }
}

export default Accordion;
