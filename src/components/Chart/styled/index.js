import styled from 'styled-components';


export const StyledCard = styled.div`
    width: calc(100% - 250px);
    background-color: white;
    margin: 6px 14px 6px 6px;
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