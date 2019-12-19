import React from 'react';

import { StyledRoot } from './styled';


export default function Content(props) {
    return (
        <StyledRoot>
            {props.children}
        </StyledRoot>
    );
};
