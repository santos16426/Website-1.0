import { Tooltip } from "antd";
import styled from "styled-components";

export const LinkWrapper = styled.div`
	a {
		color: #c7c7c7;
		text-decoration: none;
	}
	@media screen and (max-width: ${props => props.theme.tablet}) {
		margin: auto 0;
	}
`;
export const LinkMobile = styled.div`
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
export const LinkDesktop = styled.div`
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
	min-height: 15px;
	min-width: 35px;
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
		font-size: 1em;
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
