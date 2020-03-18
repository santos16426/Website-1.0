import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	.content {
		position: absolute;
		height: 100vh;
		z-index: 111;
		top: 0;
		left: 0;
		text-align: center;
		width: 100%;
		padding: 50px 0;

		* {
			justify-content: center;
		}
	}
	.bg-img {
		height: 100vh;
		-webkit-filter: blur(5px);
		filter: blur(5px);
		background-image: url(${props => (props.bgUrl ? props.bgUrl : "")});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.description {
		padding: 30px;
		color: white;
		font-size: 1.5em;
		max-width: 600px;
		margin: 0 auto;
	}
`;
