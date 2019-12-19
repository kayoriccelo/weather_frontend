import React from 'react';
import { Chart as ChartGoogle } from "react-google-charts";

import { StyledCard, StyledTitle, StyledTitleFooter } from './styled';


export default function Chart(props) {
    const options = {
        legend: "none",
        chartArea: { width: '90%' },
        bar: { groupWidth: "40" },
        fontSize: 8,
        animation: {
            duration: 1000,
            startup: true,
        },
    };

    return (
        <>
            <StyledCard>
                <StyledTitle>
                    Climate
                </StyledTitle>

                <ChartGoogle
                    chartType="ColumnChart"
                    data={props.data}
                    options={{
                        ...options,
                        vAxis: {
                            logScale: false
                        }
                    }}
                />

                <StyledTitleFooter>
                    *Detailed weather information
                </StyledTitleFooter>
            </StyledCard>
        </>
    );
};
