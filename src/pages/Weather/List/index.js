import React, { useState } from 'react';

import { Modal } from '../../../components';
import { StyledRoot, StyledTitle, StyledRow, StyledRowContent, StyledEmpty } from './styled';


export default function List(props) {
    const [showing, setShowing] = useState(false);
    const [day, setDay] = useState(null);

    const handleClick = day => _ => {
        setDay(day);
        setShowing(true);
    };

    return (
        <StyledRoot screen={props.screen}>
            <StyledTitle children="Days" />

            {props.data ? (
                <>
                    {props.data['list'].map((item, index) => (
                        <StyledRow key={index}>
                            <StyledRowContent onClick={handleClick(item)} >
                                <b>Date:</b> {item['dt_txt']}
                                <b>Cloudiness:</b> {item['weather'][0]['description']}
                                <b>Min:</b> {(item['main']['temp_min'] - 273.15).toFixed(2)} °C
                                <b>Max:</b> {(item['main']['temp_max'] - 273.15).toFixed(2)} °C
                            </StyledRowContent>
                        </StyledRow>
                    ))}
                    
                    <Modal
                        showing={showing}
                        hide={() => setShowing(false)}
                        city={props.data['city']}
                        day={day}
                    />
                </>
            ) : (<StyledEmpty children="No results found." />)}
        </StyledRoot>
    );
};
