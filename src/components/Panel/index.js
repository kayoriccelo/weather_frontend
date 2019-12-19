import React from 'react';

import { StyledCard, StyledTitle, StyledLabel, StyledValue, StyledRow } from './styled';


export default function Panel(props) {

    const parseTime = duration => {
        var minutes = parseInt((duration / (1000 * 60)) % 60)
            , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;

        return `${hours}:${minutes}`;
    }


    return (
        <StyledCard>
            <StyledTitle>
                Panel
            </StyledTitle>

            <StyledRow>
                <StyledLabel>Wind:</StyledLabel>
                <StyledValue>
                    {`${props.data['weather'][0]['main']}, 
                    ${props.data['wind']['speed']} m/s,
                    ${props.data['wind']['deg']}`}
                </StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Cloudiness:</StyledLabel>
                <StyledValue>{props.data['weather'][0]['description']}</StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Pressure:</StyledLabel>
                <StyledValue>{props.data['main']['pressure']} hpa</StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Humidity:</StyledLabel>
                <StyledValue>{props.data['main']['humidity']} %</StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Sunrise:</StyledLabel>
                <StyledValue>{parseTime(props.data['sys']['sunrise'])}</StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Sunset:</StyledLabel>
                <StyledValue>{parseTime(props.data['sys']['sunset'])}</StyledValue>
            </StyledRow>

            <StyledRow>
                <StyledLabel>Geo coords:</StyledLabel>
                <StyledValue>{`[${props.data['coord']['lon']}, ${props.data['coord']['lat']}]`}</StyledValue>
            </StyledRow>
        </StyledCard>
    );
};
