import { useRef, useState, type ChangeEvent } from 'react';

export default {
    title: 'input',
};

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <input
                value={value}
                onChange={(event) => {
                    setValue(event.currentTarget.value);
                }}
            />
            - {value}
        </>
    );
};

export const InputRefInput = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleOnClick = () => {
        if (inputRef.current) {
            setValue(inputRef.current.value);
        }
    };
    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleOnClick}>save</button> - {value}
        </>
    );
};

export const CheckboxInput = () => {
    const [checked, setChecked] = useState(false);
    const handleOnClick = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.currentTarget.checked);
    };
    return (
        <>
            <input type='checkbox' checked={checked} onChange={handleOnClick} />
        </>
    );
};

export const SelectorInput = () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value);
    };
    return (
        <select value={value} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
        </select>
    );
};
