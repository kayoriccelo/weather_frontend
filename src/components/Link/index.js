import React from 'react';
import { StyledLink } from './styled';


export default function (props) {
    return (
        <StyledLink screen={props.screen} to={props.href}>
            {props.label}
        </StyledLink>
    );
};
