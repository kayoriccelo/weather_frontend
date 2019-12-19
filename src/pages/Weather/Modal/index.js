import React from 'react';
import ReactDOM from 'react-dom';

import {
    StyledModal, StyledModalHeader, StyledModalWrapper, StyledModalOverlay, StyledButtonClose, 
    StyledTitle, StyledRow
} from './styled';


export default function Modal({ showing, hide, city, day }) {
    return (
        <>
            {showing ? ReactDOM.createPortal(
                <>
                    <StyledModalOverlay />
                    <StyledModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <StyledModal>
                            <StyledModalHeader>
                                <StyledTitle children={`Weather in ${city['name']}, ${city['country']}`} />

                                <StyledButtonClose
                                    type="button"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={hide}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </StyledButtonClose>
                            </StyledModalHeader>

                            <StyledRow>
                                <b>Date</b> {day['dt_txt']}
                            </StyledRow>

                            <StyledRow>
                                <b>Wind</b> {day['weather'][0]['description']}, {day['wind']['speed']} m/s
                            </StyledRow>

                            <StyledRow>
                                <b>Cloudiness</b> {day['weather'][0]['main']}
                            </StyledRow>

                            <StyledRow>
                                <b>Pressure</b> {day['main']['pressure']} hpa
                            </StyledRow>

                            <StyledRow>
                                <b>Humidity</b> {day['main']['humidity']} %
                            </StyledRow>

                            <StyledRow>
                                <b>Maximum Temperature</b> {day['main']['temp_max']}
                            </StyledRow>

                            <StyledRow>
                                <b>Minimum Temperature</b> {day['main']['temp_min']}
                            </StyledRow>

                            <StyledRow>
                                <b>Geo coords</b> [{city['coord']['lon']}, {city['coord']['lat']}]
                            </StyledRow>
                        </StyledModal>
                    </StyledModalWrapper>
                </>, document.body
            ) : null}
        </>
    );
};
