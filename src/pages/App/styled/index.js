import styled from 'styled-components';


export const StyledMain = styled.div`
    display: flex; 
    flex-direction: ${props => props.screen.width >= 800 ? 'row' : 'column'};
`;
