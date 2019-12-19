import styled from 'styled-components';


export const StyledRoot = styled.div`
    margin: 6px 18px 6px 6px;
    padding: 6px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 6px;
`;

export const StyledRow = styled.div`
    padding: 6px;
    margin: 4px;
    background-color: #ffebcc;
    border-radius: 4px;
`;

export const StyledRowContent = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    cursor: pointer;
`;

export const StyledEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 220px);
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
