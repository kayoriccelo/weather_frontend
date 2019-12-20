import styled from 'styled-components';


export const StyledCard = styled.div`
    height: ${props => props.screen.width >= 800 ? 'calc(100vh - 225px)' : '90px'};    
    width: ${props => props.screen.width >= 800 ? '250px' : 'calc(100% - 40px)'};
    background-color: white;
    margin: ${props => props.screen.width >= 800 ? '6px 6px 6px 18px' : '9px 12px 9px 12px'};
    padding: 6px;
    border-radius: 4px;
    border: 1px solid #ddd;
`;

export const StyledTitle = styled.div`
    font-size: 15px; 
    text-align: left;
    padding-left: 8px;
    color: #8c8c8c;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    margin: 4px;
`;

export const StyledRow = styled.div`
    width: 200px;
    height: 25px;
    padding: 0px 6px;
    display: flex;
    flex-direction: row;
`;

export const StyledLabel = styled.div`
    width: 80px;
    font-weight: bold;
    font-size: 12px;
`;

export const StyledValue = styled.div`
    width: 120px;
    font-size: 12px;
`;
