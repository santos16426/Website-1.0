import styled from "styled-components";
export const Wrapper = styled.div`
	position: relative;
`;

export const TypeWriterWrapper = styled.div`
	position: absolute;
	z-index: 1;
	top: 30%;
	left: 10%;
	.contact-me {
	}

	.button-container {
		position: relative;
	}
	@media screen and (max-width: ${props => props.theme.phone}) {
		.typewriter-container {
			position: absolute;
			z-index: 1;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
`;
