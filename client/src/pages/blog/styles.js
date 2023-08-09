import { styled } from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	background-image: url(/images/blogbackground.jpg);
	background-size: cover;
	background-position: bottom center;
	background-color: white;
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
	align-items: center;
	gap: 40px;
`;

const StyledImgCont = styled.div`
	width: 50%;
`;

const StyledTextCont = styled.div``;

const StyledNews = styled.div`
	width: 30.3%;
	height: 300px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border-radius: 10px;
	gap: 50px;
	overflow: hidden;
	cursor: pointer;

	&:first-of-type {
		width: 100%;
		height: 400px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
`;

const StyledRowNews = styled.div`
	display: flex;
`;

const StyledImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

const StyledTextH1 = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-size: 18px;
	font-weight: 600;
	color: black;
	margin: 0;
`;

const StyledTextP = styled.p`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: 400;
	color: gray;
	margin: 0;
`;

const CreateContainer = styled.form`
	width: 20%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 10px;
`;

const EditContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

export {
	StyledContainer,
	StyledTitle,
	StyledNewsContainer,
	StyledNews,
	StyledImgCont,
	StyledImg,
	StyledTextCont,
	StyledTextH1,
	StyledTextP,
	EditContainer,
	CreateContainer,
	StyledRowNews
};
