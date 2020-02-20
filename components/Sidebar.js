import styled from "styled-components";
import Navlinks from "./Navlinks/";
import SocialMedia from "./SocialMedia/";
import Logo from "./Logo/";
const SidebarWrapper = styled.div`
	background: #181818 !important;
	width: 60px;
	height: 100%;
	position: absolute;
	top: 0;
	z-index: 3;
	min-height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (max-width: ${props => props.theme.tablet}) {
		width: 100%;
		height: 60px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		min-height: 0;
		flex-direction: row;
		div {
			flex-direction: column;
		}
	}
`;

const Sidebar = () => (
	<SidebarWrapper>
		<Logo />
		<Navlinks />
		<SocialMedia />
	</SidebarWrapper>
);

export default Sidebar;
