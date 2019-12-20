import styled from 'styled-components';


export const StyledRoot = styled.div`
    margin: ${props => props.screen.width >= 800 ? '6px 18px 6px 6px' : '9px 12px 18px 12px'};
    padding: 6px;
    width: ${props => props.screen.width >= 800 ? '100%' : 'calc(100% - 40px)'};
    height: calc(100vh - 225px);
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 6px;
`;

export const StyledRow = styled.div`
    padding: 6px;
    margin: 4px;
    background-color: #ffebcc;
    border-radius: 4px;
    width: 100vh;
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
    height: calc(100vh - 260px);
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
