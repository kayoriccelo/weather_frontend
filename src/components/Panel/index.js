import React from 'react';

import { StyledCard, StyledTitle, StyledLabel, StyledValue, StyledRow } from './styled';


export default function Panel(props) {

    // const parseTime = duration => {
    //     var minutes = parseInt((duration / (1000 * 60)) % 60)
    //         , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    //     hours = (hours < 10) ? "0" + hours : hours;
    //     minutes = (minutes < 10) ? "0" + minutes : minutes;

    //     return `${hours}:${minutes}`;
    // }


    return (
        <StyledCard>
            <StyledTitle>
                Panel
            </StyledTitle>

            <StyledRow>
                <StyledLabel>City:</StyledLabel>
                <StyledValue>{props.data['name']}</StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Country:</StyledLabel>
                <StyledValue>{props.data['country']}</StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Geo coords:</StyledLabel>
                <StyledValue>{`[${props.data['coord']['lon']}, ${props.data['coord']['lat']}]`}</StyledValue>
            </StyledRow>
        </StyledCard>
    );
};
