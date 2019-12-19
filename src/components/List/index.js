import React from 'react';


export default function List(props) {
    return (
        <table>
            <thead>
                <th width="20%">Date</th>
                <th width="35%">Cloudiness</th>
                <th width="12%">Pressure</th>
                <th width="11%">Humidity</th>
                <th width="11%">Sunrise</th>
                <th width="11%">Sunset</th>
            </thead>
            <tbody>
                {props.data['list'].map(item => (
                    <>
                        <td>{item['dt_txt']}</td>
                        <td>{item['weather'][0]['description']}</td>
                        <td>{item['main']['pressure']} hpa</td>
                        <td>{item['main']['humidity']} %</td>
                        <td>Sunrise</td>
                        <td>Sunset</td>
                    </>
                ))}
            </tbody>
        </table>
    );
};
