import styled from "styled-components";

export const AvatarWrapper = styled.div`
	margin: 10px auto 0 auto;
	width: 150px;
	height: 150px;
	box-sizing: border-box;
	border: 5px white solid;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
	transform: translatey(0px);
	&:hover {
		animation: float 1s ease-in-out infinite;
	}
	img {
		width: 100%;
		height: auto;
	}
	@keyframes float {
		0% {
			box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
			transform: translatey(0px);
		}
		50% {
			box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
			transform: translatey(-20px);
		}

		100% {
			box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
			transform: translatey(0px);
		}
	}
`;
