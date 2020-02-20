import { Tooltip } from "antd";
import styled from "styled-components";

export const NavlinkWrapper = styled.div`
	margin: auto !important;

	a {
		color: #c7c7c7;
		text-decoration: none;
	}
`;
export const NavLinkMobile = styled.div`
	@media screen and (max-width: ${props => props.theme.phone}) {
		display: none !important;
	}
	@media screen and (max-width: ${props => props.theme.tablet}) {
		display: flex;
		flex-direction: row !important;
		justify-content: center;
		div {
			margin: 0 5px !important;
		}
	}
	@media screen and (min-width: ${props => props.theme.tablet}) {
		display: none;
	}
`;
export const NavLinkDesktop = styled.div`
	@media screen and (max-width: ${props => props.theme.tablet}) {
		display: none;
	}
	@media screen and (min-width: ${props => props.theme.tablet}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		div {
			margin: 10px 0;
		}
	}
`;
export const NavWrapper = styled.div`
	min-height: 30px;
	min-width: 50px;
	p {
		font-size: 0.5em;
		display: none;
	}
	cursor: pointer;
	&:hover {
		color: white;

		span {
			display: none;
		}
		p {
			display: initial;
		}
	}
	i {
		font-size: 1.5em;
	}
`;
export const Nav = ({ children, title }) => {
	return (
		<NavWrapper>
			<span>{children}</span>
			<p>{title}</p>
		</NavWrapper>
	);
};
