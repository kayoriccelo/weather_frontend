import React from 'react';

import { StyledRoot, StyledInputSearch, StyledButtonSearch } from './styled';


export default function Search(props) {
    return (
        <StyledRoot>
            <StyledInputSearch
                placeholder='Your city name'
                value={props.value}
                onChange={props.onSearch}
            />

            <StyledButtonSearch onClick={props.onClick}>
                <img src={require('../../assets/images/search.ico')} alt="search" width="25" />
            </StyledButtonSearch>
        </StyledRoot>
    );
};
