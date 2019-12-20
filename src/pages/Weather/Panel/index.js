import React from 'react';

import { StyledCard, StyledTitle, StyledLabel, StyledValue, StyledRow } from './styled';


export default function Panel(props) {
    return (
        <StyledCard screen={props.screen}>
            <StyledTitle>
                Location
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
