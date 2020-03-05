import styled from "styled-components";

export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background: #1a1a1a;
	background-image: url(${props => (props.bgUrl ? props.bgUrl : "")});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100vh;
	padding: 30px;
`;

export const FormWrapper = styled.div`
	background: rgba(0, 0, 0, 0.8);
	padding: 50px;
	border-radius: 3px;
	margin: auto;
	border-radius: 8px;

	p {
		font-family: "Open Sans", sans-serif;
		color: white;
		width: 80%;
		font-size: 0.8em;
	}
	.title {
		font-size: 2em;
		font-weight: bold;
	}
	@media screen and (max-width: ${props => props.theme.tablet}) {
		p {
			width: 100%;
		}
	}
	@media screen and (min-width: ${props => props.theme.tablet}) {
	}
	.custom-field {
		margin: 10px 10px !important;
	}
	.custom-recaptcha {
		@media screen and (max-width: ${props => props.theme.phone}) {
			transform: scale(0.8) !important;
			transform-origin: 0 0 !important;
		}
	}

	@media screen and (max-width: ${props => props.theme.tablet}) {
		flex-direction: column;
	}
`;
export const InputGroupWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	&:first-child {
		margin-top: 8px;
	}
	.custom-field {
		flex: 1;
		&.with-right-offset {
			margin-right: 24px;
			@media screen and (max-width: ${props => props.theme.tablet}) {
				margin-right: 0px;
			}
		}
	}

	@media screen and (max-width: ${props => props.theme.tablet}) {
		flex-direction: column;
	}
`;
