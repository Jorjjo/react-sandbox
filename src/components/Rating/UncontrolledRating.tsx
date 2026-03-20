// type RatingProps = {
//     value: 0 | 1 | 2 | 3 | 4 | 5;
// };

import { useState } from 'react';

export function UncontrolledRating() {
    const [rating, setRating] = useState(0);

    return (
        <div>
            <Star selected={rating >= 1} onClick={() => setRating(1)} />
            <Star selected={rating >= 2} onClick={() => setRating(2)} />
            <Star selected={rating >= 3} onClick={() => setRating(3)} />
            <Star selected={rating >= 4} onClick={() => setRating(4)} />
            <Star selected={rating >= 5} onClick={() => setRating(5)} />
        </div>
    );
}

type StarProps = {
    selected: boolean;
    onClick: () => void;
};

function Star(props: StarProps) {
    return (
        <span onClick={props.onClick}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    );
}
