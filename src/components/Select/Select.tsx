import styles from './Select.module.css';

type ItemProps = {
    title: string;
    value: string;
};

export type SelectorPropsType = {
    collapsed: boolean;
    setAccordionCollapsed: () => void;
    items: Array<ItemProps>;
    changeTitle: (value: string) => void;
    value: string;
};

export function Select(props: SelectorPropsType) {
    return (
        <div>
            <div
                className={styles.selector}
                onClick={props.setAccordionCollapsed}
            >
                {props.value}
            </div>

            {!props.collapsed && (
                <div className={styles.selectorAccordion}>
                    {props.items.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    props.changeTitle(item.title);
                                }}
                                key={item.value}
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
