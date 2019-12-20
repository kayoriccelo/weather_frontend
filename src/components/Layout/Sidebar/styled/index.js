import styled from 'styled-components';


export const StyledRoot = styled.div`
    display: flex;
    ${props => (
        props.screen.width >= 800 ? `` : `justify-content: space-around;` 
    )}
    flex-direction: ${props => props.screen.width >= 800 ? 'column' : 'row'};
    width: ${props => props.screen.width >= 800 ? '240px' : '100%'};
    height: ${props => props.screen.width >= 800 ? 'calc(100vh - 90px)' : '50px'};
    box-shadow: -4px 0px 10px 0px rgba(0,0,0,0.45);
`;
