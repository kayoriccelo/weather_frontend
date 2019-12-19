import styled from 'styled-components';


export const StyledCard = styled.div`
    background-color: white;
    margin: 6px;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.75);
`;

export const StyledTitle = styled.div`
    font-size: 12px; 
    text-align: left;
    padding-left: 20px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    margin: 4px;
`;

export const StyledTitleFooter = styled.div`
    font-size: 12px;
    text-align: center; 
`;

export const StyledLoading = styled.div`
    display: flex;
    flex-direction: flex-end;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;