import React from 'react';

import { StyledTitle } from './styled';

export default function List(props) {
    return (
        <div style={{
            margin: 18,
            padding: 6,
            width: 'calc(100% - 50px)',
            height: 'calc(100vh - 140px)',
            border: '1px solid #ddd',
            borderRadius: 6
        }}>
            <StyledTitle>
                History
            </StyledTitle>

            {props.data['list'].length > 0 ? (
                props.data['list'].map(item => (
                    <div
                        style={{
                            padding: 6,
                            margin: 4,
                            backgroundColor: '#ffebcc',
                            borderRadius: 4
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            fontSize: 12
                        }}>
                            <b>Date:</b> {item['date']}
                            <b>Search:</b> {item['search']}
                        </div>
                    </div>
                ))
            ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 'calc(100vh - 220px)'
                    }}>
                        Empty
                    </div>
                )}
        </div>
    );
};
