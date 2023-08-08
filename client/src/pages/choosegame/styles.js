import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    border-radius: 20px;
    background-image: url(/images/choosegamebackground2.png);
    background-size: cover;
    position: relative;
`;

const StyledBtn = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 30px;
    background-color: #ffe737;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    text-shadow: 1px 1px black;
    position: absolute;
    bottom: 70px;
    right: 60px;
    transition: 0.3s all ease;

    &:hover {
        background-color: #fff000;
    }
`;

export {StyledContainer, StyledBtn}