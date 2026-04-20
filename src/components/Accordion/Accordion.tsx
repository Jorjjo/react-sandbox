type ItemProps = {
    title: string;
    value: string;
};

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setAccordionCollapsed: () => void;
    items: Array<ItemProps>;
    onClick: (value: string) => void;
};

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.setAccordionCollapsed}
            />
            {!props.collapsed && (
                <AccordionBody onClick={props.onClick} items={props.items} />
            )}
        </div>
    );
}

type AccordionTitlePropsValue = {
    title: string;
    onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
}

type AccordionBodyProps = {
    items: Array<ItemProps>;
    onClick: (value: string) => void;
};
function AccordionBody(props: AccordionBodyProps) {
    return (
        <ul>
            {props.items.map((item, index) => {
                return (
                    <li
                        key={index}
                        onClick={() => {
                            props.onClick(item.value);
                        }}
                    >
                        {item.title}
                    </li>
                );
            })}
        </ul>
    );
}
