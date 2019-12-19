import React from 'react';

import { Search, Chart } from '../../components';
import { StyledRoot } from './styled';


export default function Weather() {
    return (
        <StyledRoot>
            <Search />

            <Chart />
        </StyledRoot>
    );
};
