import React from 'react';

import { StyledRoot } from './styled';


export default function Content(props) {
    return (
        <StyledRoot screen={props.screen}>
            {props.children}
        </StyledRoot>
    );
};
