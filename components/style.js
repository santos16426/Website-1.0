import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	/* overflow: scroll; */
	.content {
		width: 100%;
		display: flex;
		flex-direction: row;
		position: absolute;
		height: 100vh;
		z-index: 111;
		top: 0;
		left: 0;
		@media screen and (max-width: ${props => props.theme.tablet}) {
			flex-direction: column;
		}
	}
	.left-side {
		text-align: center;
		width: 100%;
		padding: 50px 0;

		* {
			justify-content: center;
		}

		.skills {
			max-width: 600px;
			margin: 0 auto;
			padding: 5px 20px;
			background: rgba(255, 255, 255, 0.5);
			border-radius: 5px;
			box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
			* {
				justify-content: start;
			}
		}
	}
	.right-side {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100vh;
		@media screen and (max-width: ${props => props.theme.tablet}) {
			display: none;
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
