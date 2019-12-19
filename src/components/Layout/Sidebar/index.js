import React from 'react';
import Link from '../../Link';

import { StyledRoot } from './styled';


export default function Sidebar() {
    return (
        <StyledRoot>
            <Link label="Search" href='/' />
            <Link label="History" href='/history' />
        </StyledRoot>
    );
};
