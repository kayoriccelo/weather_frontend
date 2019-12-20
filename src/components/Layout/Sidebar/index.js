import React from 'react';
import Link from '../../Link';

import { StyledRoot } from './styled';


export default function Sidebar(props) {
    return (
        <StyledRoot screen={props.screen}>
            <Link screen={props.screen} label="Search" href='/' />
            <Link screen={props.screen} label="History" href='/history' />
        </StyledRoot>
    );
};
