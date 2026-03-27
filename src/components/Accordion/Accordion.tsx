export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setAccordionCollapsed: () => void;
};

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.setAccordionCollapsed}
            />
            {!props.collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsValue = {
    title: string;
    onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3 onClick={props.onClick}>{props.title}</h3>;
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

export default Accordion;
