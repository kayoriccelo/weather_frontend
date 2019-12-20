import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
    padding: 15px 15px 15px 30px;
    width: ${props => props.screen.width >= 800 ? '' : '50%'};
    :hover {
        background-color: #ffebcc;
        border-right: 2px solid #ff920a;
        border-radius: 8px;
    }
`;
