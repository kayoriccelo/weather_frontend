import React from 'react';

import { StyledRoot, StyledTitle, StyledRow, StyledRowContent, StyledEmpty } from './styled';

export default function List(props) {
    return (
        <StyledRoot>
            <StyledTitle children="History" />

            {props.data['list'].length > 0 ? (
                props.data['list'].map(item => (
                    <StyledRow>
                        <StyledRowContent>
                            <b>Date:</b> {item['date']}
                            <b>Search:</b> {item['search']}
                        </StyledRowContent>
                    </StyledRow>
                ))
            ) : (<StyledEmpty children="Empty" />)}
        </StyledRoot>
    );
};
