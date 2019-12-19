import React, { useState } from 'react';

import { StyledRoot, StyledTitle, StyledRow, StyledRowContent, StyledEmpty } from './styled';
import Modal from '../Modal';


export default function List(props) {
    const [showing, setShowing] = useState(false);
    const [day, setDay] = useState(null);

    const handleClick = day => _ => {
        setDay(day);
        setShowing(true);
    };

    return (
        <StyledRoot>
            <StyledTitle children="Days" />

            {props.data['list'].length > 0 ? (
                props.data['list'].map(item => (
                    <StyledRow >
                        <StyledRowContent onClick={handleClick(item)} >
                            <b>Date:</b> {item['dt_txt']}

                            <b>Cloudiness:</b> {item['weather'][0]['description']}


                            <b>Min:</b> {item['main']['temp_min']} °C
                            <b>Max:</b> {item['main']['temp_max']} °C
                        </StyledRowContent>
                    </StyledRow>
                ))
            ) : (<StyledEmpty children="Empty" />)}

            <Modal
                showing={showing}
                hide={() => setShowing(false)}
                city={props.data}
                day={day}
            />
        </StyledRoot>
    );
};
