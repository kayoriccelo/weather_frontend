import styled, { keyframes } from 'styled-components';


const keyframeRoot = keyframes`
    0% {
        transform: translateY(-200px);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        transform: translateY(-100px);
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        transform: translateY(-165px);
        animation-timing-function: ease-in;
    }
    72% {
        transform: translateY(-100px);
        animation-timing-function: ease-out;
    }
    81% {
        transform: translateY(-128px);
        animation-timing-function: ease-in;
    }
    90% {
        transform: translateY(-100px);
        animation-timing-function: ease-out;
    }
    95% {
        transform: translateY(-108px);
        animation-timing-function: ease-in;
    }
    100% {
        transform: translateY(-100px);
        animation-timing-function: ease-out;
    }
`;

export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
`;

export const StyledModalWrapper = styled.div`
    animation: ${keyframeRoot} 1.1s both;    
    position: fixed;
    top: 200px;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`;

export const StyledModal = styled.div`
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 4px;
    max-width: 400px;
    padding: 2rem;
    trasition: 
`;

export const StyledModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledTitle = styled.div`
    width: 80%;
    font-size: 18px; 
    text-align: center;
    color: #8c8c8c;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    margin: 4px;
`;

export const StyledButtonClose = styled.button`
    font-size: 1.4rem;
    font-weight: 700;
    height: 26px;
    color: white;
    background-color: #ff920a;
    cursor: pointer;
    border: none;
    border-radius: 4px
`;


export const StyledRow = styled.div`
    padding: 6px;
    margin: 4px;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
`;
