import { useState } from 'react';

// type Props = {
//     isOn: boolean;
// };

export function OnOff() {
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
    return (
        <div>
            <div style={onStyle} onClick={() => {setIsOn(true)}}>
                On
            </div>
            <div style={offStyle} onClick={() => {setIsOn(false)}}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}
