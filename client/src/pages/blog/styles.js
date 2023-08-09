import { styled } from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	background-image: url(/images/blogbackground3.jpg);
	background-size: cover;
	background-position: bottom center;
	background-color: lightgray;
	border-radius: 20px;
	overflow: auto;
`;

const StyledTitle = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-size: 40px;
	font-weight: 600;
	color: black;
`;

const StyledNewsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;
	gap: 40px;
`;

const StyledImgCont = styled.div`
	border-bottom: 1px solid gray;
`;

const StyledTextCont = styled.div`
	width: 85%;
	margin: 11px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 20px;
`;

const StyledImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

const StyledBtnCont = styled.div`
	margin-top: 10px;
	display: flex;
	gap: 10px;
`;

const StyledNewsImg = styled.img`
	margin: 30px 0;
	width: 200px;
	object-fit: cover;
	border-radius: 10px;
	border: 1px solid black;
`;

const StyledTextH1 = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-size: 18px;
	font-weight: 600;
	line-height: 20px;
	color: black;
	margin: 0;
	padding-bottom: 10px;
`;

const StyledTextP = styled.p`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 400;
	color: gray;
	margin: 0;
`;

const StyledAdminBtn = styled.button`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 500;
	border: 0;
	color: white;
	background-color: #0f324c;
	cursor: pointer;
	transition: 0.3s all ease;

	&:hover {
		background-color: #255f8b;
	}
`;

const StyledNews = styled.div`
	width: 30.3%;
	display: flex;
	flex-flow: column nowrap;
	gap: 20px;
	align-items: flex-start;
	background-color: white;
	border-radius: 10px;
	overflow: hidden;
	border: 1px solid black;
	cursor: pointer;

	&:first-of-type {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 40px;

		& ${StyledImgCont} {
			width: 70%;
			border-bottom: 0;
			border-right: 1px solid gray;
		}

		& ${StyledTextH1} {
			font-size: 26px;
			line-height: 30px;
			margin-bottom: 10px;
			padding-bottom: 0;
		}

		& ${StyledTextP} {
			font-size: 14px;
		}

		& ${StyledBtnCont} {
			position: relative;
			bottom: 0;
		}

		& ${StyledTextCont} {
			padding-bottom: 0;
		}
	}
`;

const StyledRowNews = styled.div`
	display: flex;
`;

const CreateContainer = styled.form`
	width: 50%;
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: white;
	border: 1px solid black;
	border-radius: 10px;
	margin-bottom: 50px;
`;

const CreateLabel = styled.label`
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	font-weight: 400;
	color: black;
	text-align: left;
`;

const CreateInput = styled.input`
	width: 460px;
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 400;
	color: black;
`;

const CreateTextArea = styled.textarea`
	width: 460px;
	height: 100px;
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 400;
	resize: none;
`;

const CreateBtn = styled.input`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 500;
	padding: 10px 25px;
	color: white;
	border: 0;
	background-color: #0f324c;
	cursor: pointer;
	transition: 0.3s all ease;
	margin: 20px 0;

	&:hover {
		background-color: #255f8b;
	}
`;

const CreateH1 = styled.h1`
	font-family: 'Poppins', sans-serif;
	padding: 10px 25px;
	font-size: 20px;
	font-weight: 500;
	color: white;
	background-color: #255f8b;
`;

const EditContainer = styled.div`
	width: 100%;
	padding-bottom: 20px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
`;

const EditLabelCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

const EditBtn = styled.button`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 500;
	padding: 10px 25px;
	color: white;
	border: 0;
	background-color: #0f324c;
	cursor: pointer;
	transition: 0.3s all ease;

	&:hover {
		background-color: #255f8b;
	}
`;

const EditInput = styled.input`
	width: 160px;
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 400;
	color: black;
`;

export {
	StyledContainer,
	StyledTitle,
	StyledNewsContainer,
	StyledNews,
	StyledNewsImg,
	StyledImgCont,
	StyledImg,
	StyledTextCont,
	StyledTextH1,
	StyledTextP,
	EditContainer,
	CreateContainer,
	StyledRowNews,
	StyledBtnCont,
	StyledAdminBtn,
	CreateLabel,
	CreateInput,
	CreateTextArea,
	CreateBtn,
	CreateH1,
	EditLabelCont,
	EditBtn,
	EditInput
};
