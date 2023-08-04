import { styled } from "styled-components";

const StyledRowCont = styled.div`

`;

const StyledRow = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
`;

const StyledLetter = styled.div`
    display: block;
    width: 60px;
    height: 60px;
    border: 1px solid #bbb;
    margin: 4px;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.5em;
`;

export {StyledRowCont, StyledLetter, StyledRow}