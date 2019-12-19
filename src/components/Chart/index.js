import React from 'react';
import { Chart as ChartGoogle } from "react-google-charts";

import { StyledCard, StyledTitle, StyledTitleFooter } from './styled';


export default function Chart(props) {
    const data = {
        "coord": { "lon": -0.13, "lat": 51.51 },
        "weather": [{ "id": 300, "main": "Drizzle", "description": "light intensity drizzle", "icon": "09d" }],
        "base": "stations",
        "main": { "temp": 280.32, "pressure": 1012, "humidity": 81, "temp_min": 279.15, "temp_max": 281.15 },
        "visibility": 10000,
        "wind": { "speed": 4.1, "deg": 80 },
        "clouds": { "all": 90 },
        "dt": 1485789600,
        "sys": { "type": 1, "id": 5091, "message": 0.0103, "country": "GB", "sunrise": 1485762037, "sunset": 1485794875 },
        "id": 2643743,
        "name": "London",
        "cod": 200
    };

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
                    data={data}
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
