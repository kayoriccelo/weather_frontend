import styled from 'styled-components';


export const StyledCard = styled.div`
    height: calc(100vh - 225px);    
    width: 250px;
    background-color: white;
    margin: 6px 6px 6px 14px;
    padding: 6px;
    border-radius: 4px;
    border: 1px solid #ddd;
`;

export const StyledTitle = styled.div`
    font-size: 12px; 
    text-align: left;
    padding-left: 20px;
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
