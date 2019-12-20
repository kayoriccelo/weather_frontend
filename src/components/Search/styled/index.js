import styled from 'styled-components';


export const StyledRoot = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledInputSearch = styled.input`
    width: 220px;
    height: 30px;
    border: 1px solid #ff920a;
    border-radius: 8px;
    padding: 4px 4px 4px 16px;
    :focus {
        outline: 0px;
        border: 1.5px solid #ff920a; 
        border-radius: 8px;
    }
`;

export const StyledButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 8px;
    position: relative;
    background-color: #ff920a;
    border: none;
    border-radius: 8px;
    font-size: 28px;
    color: #FFFFFF;
    
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;

    :after {
        content: "";
        background: #f1f1f1;
        display: block;
        position: absolute;
        padding-top: 350%;
        padding-left: 350%;
        margin-left: -20px !important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }
      
    :active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }

    :focus {
        outline: 0px;
    }
`;