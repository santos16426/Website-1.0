import styled from "styled-components";
export const LayoutWrapper = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	height: ${props => (props.noscroll ? "100vh" : "100%")};
	@media screen and (min-height: 1080px) {
		height: 100vh;
	}
	@media screen and (max-width: ${props => props.theme.tablet}) {
		height: 100% !important;
	}
	@media screen and (max-height: 660px) {
		height: 100%;
	}
`;

export const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	margin-left: 60px;
	margin-top: 0;
	@media screen and (max-width: ${props => props.theme.tablet}) {
		overflow: visible;
		margin-left: 0px;
		margin-top: 60px;
	}
`;
