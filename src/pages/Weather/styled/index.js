import styled, { keyframes } from 'styled-components';


const keyframeRoot = keyframes`
    0% {
        transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
        transform-origin: 0% 50%;
        filter: blur(40px);
        opacity: 0;
    }
    100% {
        transform: translateX(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
`;

export const StyledRoot = styled.div`
    -webkit-animation: ${keyframeRoot} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: ${keyframeRoot} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
`;

export const StyledMain = styled.div`
    display: flex; 
    flex-direction: row;
`;