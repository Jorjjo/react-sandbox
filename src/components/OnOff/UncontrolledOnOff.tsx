import { useState } from 'react';

type Props = {
    onChange: (isOn: boolean) => void;
};

export function UncontrolledOnOff(props: Props) {
    const [isOn, setIsOn] = useState(false);

    const onStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '10%',
        border: '1px solid white',
        display: 'inline-block',
        padding: '4px',
        backgroundColor: isOn ? 'green' : 'black',
    };
    const offStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '10%',
        border: '1px solid white',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '4px',
        backgroundColor: !isOn ? 'red' : 'black',
    };
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid white',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: isOn ? 'yellow' : 'transparent',
    };

    const onClicked = () => {
        setIsOn(true);
        props.onChange(true);
    };

    const offClicked = () => {
        setIsOn(false);
        props.onChange(false);
    };
    return (
        <div>
            <h2>UnControlled on/off</h2>
            <div style={onStyle} onClick={onClicked}>
                On
            </div>
            <div style={offStyle} onClick={offClicked}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}
