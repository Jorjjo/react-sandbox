type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function Rating(props: RatingProps) {
    return (
        <div>
            <Star selected={props.value >= 1} />
            <Star selected={props.value >= 2} />
            <Star selected={props.value >= 3} />
            <Star selected={props.value >= 4} />
            <Star selected={props.value >= 5} />
        </div>
    );
}

type StarProps = {
    selected: boolean;
};

function Star(props: StarProps) {
    if (props.selected) {
        return (
            <span>
                <b>star</b>
            </span>
        );
    }
    return <span>star </span>;
}
