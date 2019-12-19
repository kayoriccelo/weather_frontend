import React from 'react';

import { StyledTitle } from './styled';

export default function List(props) {
    return (
        <div style={{
            margin: '6px 18px 6px 6px',
            padding: 6,
            width: '100%',
            border: '1px solid #ddd',
            borderRadius: 6
        }}>
            <StyledTitle>
                Days
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
                            <b>Date:</b> {item['dt_txt']}

                            <b>Cloudiness:</b> {item['weather'][0]['description']}


                            <b>Min:</b> {item['main']['temp_min']} °C
                            <b>Max:</b> {item['main']['temp_max']} °C
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
