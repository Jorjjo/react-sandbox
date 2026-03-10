type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingProps) {
    // switch (props.value) {
    //     case 1:
    //         return (
    //             <div>
    //                 <Star selected={true} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //             </div>
    //         );
    //     case 2:
    //         return (
    //             <div>
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //             </div>
    //         );
    //     case 3:
    //         return (
    //             <div>
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //             </div>
    //         );
    //     case 4:
    //         return (
    //             <div>
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={false} />
    //             </div>
    //         );
    //     case 5:
    //         return (
    //             <div>
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //                 <Star selected={true} />
    //             </div>
    //         );

    //     default:
    //         return (
    //             <div>
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //                 <Star selected={false} />
    //             </div>
    //         );
    // }

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
    selected: boolean
}

function Star(props: StarProps) {
    if (props.selected) {
        return (
            <span>
                <b>star</b>{' '}
            </span>
        );
    }
    return <span>star </span>;
}
