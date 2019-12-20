import React from 'react';

import { StyledRoot, StyledTitle, StyledRow, StyledRowContent, StyledEmpty } from './styled';

export default function List(props) {
    return (
        <StyledRoot screen={props.screen}>
            <StyledTitle children="History" />

            {props.data.length > 0 ? (
                props.data.map((item, index) => (
                    <StyledRow key={index}>
                        <StyledRowContent >
                            <b>Date:</b> {item['date']}
                            <b>Search:</b> {item['search']}
                            <b>City:</b> {JSON.parse(item['json'])['city']['name']}
                            <b>Country:</b> {JSON.parse(item['json'])['city']['country']}
                            <b>Geo Coords:</b> [{JSON.parse(item['json'])['city']['coord']['lat']}, {JSON.parse(item['json'])['city']['coord']['lon']}]
                            <b>Climates:</b> {JSON.parse(item['json'])['list'].length}
                        </StyledRowContent>
                    </StyledRow>
                ))
            ) : (<StyledEmpty children="No results found." />)}
        </StyledRoot>
    );
};
