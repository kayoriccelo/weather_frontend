import React from 'react';
import { StyledLink } from './styled';


export default function (props) {
    return (
        <StyledLink to={props.href}>
            {props.label}
        </StyledLink>
    );
};
