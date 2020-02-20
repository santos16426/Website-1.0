import styled from "styled-components";

export const TypeWriterWrapper = styled.div`
	.typewrite > .wrap {
		border-right: 0.08em solid white;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	position: absolute;
	z-index: 1;
	text-align: center;
	color: #fff;
	font-family: "Courier New", Courier, monospace;
	font-size: 3em;
`;
