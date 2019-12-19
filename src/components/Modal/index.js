import React from 'react';
import ReactDOM from 'react-dom';

import { StyledModal, StyledModalHeader, StyledModalWrapper, StyledModalOverlay } from './styled';


export default function Modal({ showing, hide }) {
    return (
        <>
            {showing ? ReactDOM.createPortal(
                <>
                    <StyledModalOverlay />
                    <StyledModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <StyledModal>
                            <StyledModalHeader>
                                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </StyledModalHeader>
                            <p>
                                Hello, I'm a modal.
                            </p>
                        </StyledModal>
                    </StyledModalWrapper>
                </>, document.body
            ) : null}
        </>
    );
};
