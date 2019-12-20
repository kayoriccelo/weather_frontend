import styled from 'styled-components';


export const StyledRoot = styled.div`
    margin: 18px;
    padding: 6px;
    border: 1px solid #ddd;
    border-radius: 6px;
    height: calc(100vh - 250px);
    overflow-y: auto;
`;

export const StyledRow = styled.div`
    padding: 6px;
    margin: 4px;
    background-color: #fff5e6;
    border-radius: 4px;
    width: 165vh;
`;

export const StyledRowContent = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 12px;
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
