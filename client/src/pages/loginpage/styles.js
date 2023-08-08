import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    background-image: url(../../images/loginbackground3.png);
    background-size: cover;
    border-radius: 20px;
    display: flex;
    box-shadow: inset 10px 10px 5px 0px rgba(0,0,0,0.6);
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const FormContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 10px 5px 0px rgba(0,0,0,0.3);
`;

const LoginContainer = styled.form`
    width: 70%;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
`;

const RegisterContainer = styled.form`
    width: 70%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
`;

const StyledTitleCont = styled.div`
    width: 100%;
    padding-top: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #ffe737;
    border-bottom: 1px solid black;
`;

const StyledH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin: 0;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 0px gray;
`;

const StyledP = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin: 0;
    padding-bottom: 20px;
`;

const StyledLabel = styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: black;
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StyledAlready = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`;

const StyledAlreadyH4 = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: black;
    margin: 0;
`;

const StyledAlreadySpan = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: blue;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid blue;
    }

`;

const StyledInputCont = styled.div`
    display: flex;
    padding-bottom: 5px;
    border-bottom: 2px solid lightgray;
    gap: 10px;
    transition: 0.3 all ease;

    &:focus-within {
        border-bottom: 2px solid #cd8e43; 
    }
`;

const StyledImgCont = styled.div`
    padding: 3px;
    border-radius: 10%;
    border: 1px solid black;
    background-color: #ffe737;
`;

const StyledInputImg = styled.img`
    width: 30px;
    object-fit: contain;
`;

const StyledInput = styled.input`
    font-family: 'Poppins', sans-serif;
    border: 0;

    &:focus {
        outline: none;
        
    }

`;

const StyledSeparator = styled.div`
    width: 90%;
    margin: auto;
    border-radius: 20px;
    height: 1px;
    margin: 20px 0;
    background-color: gray;
`;

const StyledButtonCont = styled.div`
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 10px 30px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 30px;
    border: 0;
    color: white;
    background: linear-gradient(90deg, rgba(209,144,66,1) 31%, rgba(255,231,36,1) 100%);
    cursor: pointer;
`;

const TextContainer = styled.div`
    width: 40%;
    position: relative;
    top: 30px;
`;

const TextH1Cont = styled.div`

`;

const TextH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 80px;
    font-weight: 800;
    line-height: 80px;
    color: white;
    margin: 0;
`;

const TextPCont = styled.div`

`;

const TextP = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 25px;
    color: white;
`;

const TextH3 = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    color: white;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    position: relative;
    top: 50px;
`;

const SocialMedia = styled.div`
    display: flex;
    gap: 10px;
`;



const SocialImg = styled.img`
    width: 34px;
    object-fit: contain;
`;

const SocialTxt = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    line-height: 25px;
    color: white;
`;

const StyledGoogle = styled.div`
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledGoogleImg = styled.img`
    width: 160px;
    object-fit: contain;
    cursor: pointer;
`;
const StyledLoginBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: base;
    align-items: center;
`;

const StyledLogoutDiv = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLogoutBtn = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    padding: 5px 35px;
    background-color: crimson;
    border-radius: 20px;
    border: 1px solid black;
    color: white;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        background-color: #ff7891;
    }

`;



export {StyledContainer, FormContainer, LoginContainer, RegisterContainer, StyledH1, StyledP, InputContainer, StyledSeparator, StyledTitleCont, StyledLabel, StyledInputCont, StyledImgCont, StyledInputImg, StyledInput, StyledButtonCont, StyledAlreadyH4, StyledAlreadySpan, StyledButton, TextContainer, StyledAlready, TextH1Cont, TextH1, TextPCont, TextP, TextH3, SocialContainer, SocialMedia, SocialImg, SocialTxt, StyledGoogle, StyledGoogleImg, StyledLoginBtn, StyledLogoutDiv, StyledLogoutBtn}